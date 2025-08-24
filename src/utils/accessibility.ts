// Accessibility utilities and color contrast validation

/**
 * Calculate the relative luminance of a color
 * @param r Red component (0-255)
 * @param g Green component (0-255)
 * @param b Blue component (0-255)
 * @returns Relative luminance value
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate contrast ratio between two colors
 * @param color1 First color in hex format (#RRGGBB)
 * @param color2 Second color in hex format (#RRGGBB)
 * @returns Contrast ratio (1-21)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const hex1 = color1.replace('#', '')
  const hex2 = color2.replace('#', '')
  
  const r1 = parseInt(hex1.substr(0, 2), 16)
  const g1 = parseInt(hex1.substr(2, 2), 16)
  const b1 = parseInt(hex1.substr(4, 2), 16)
  
  const r2 = parseInt(hex2.substr(0, 2), 16)
  const g2 = parseInt(hex2.substr(2, 2), 16)
  const b2 = parseInt(hex2.substr(4, 2), 16)
  
  const lum1 = getLuminance(r1, g1, b1)
  const lum2 = getLuminance(r2, g2, b2)
  
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Check if color combination meets WCAG AA standards
 * @param foreground Foreground color in hex
 * @param background Background color in hex
 * @param isLargeText Whether the text is large (18pt+ or 14pt+ bold)
 * @returns Object with compliance information
 */
export function checkWCAGCompliance(
  foreground: string, 
  background: string, 
  isLargeText: boolean = false
) {
  const ratio = getContrastRatio(foreground, background)
  const aaThreshold = isLargeText ? 3 : 4.5
  const aaaThreshold = isLargeText ? 4.5 : 7
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    passesAA: ratio >= aaThreshold,
    passesAAA: ratio >= aaaThreshold,
    level: ratio >= aaaThreshold ? 'AAA' : ratio >= aaThreshold ? 'AA' : 'Fail',
    recommendation: ratio < aaThreshold 
      ? `Contrast ratio ${ratio.toFixed(2)} is too low. Minimum required: ${aaThreshold}`
      : `Good contrast ratio: ${ratio.toFixed(2)}`
  }
}

/**
 * Portfolio color palette with WCAG compliance checks
 */
export const colorPalette = {
  // Primary colors
  emerald400: '#34d399',
  emerald500: '#10b981',
  blue500: '#3b82f6',
  slate900: '#0f172a',
  slate800: '#1e293b',
  slate300: '#cbd5e1',
  white: '#ffffff',
  
  // Check common combinations
  checkCombinations() {
    const combinations = [
      { name: 'White on Emerald 500', fg: this.white, bg: this.emerald500 },
      { name: 'White on Blue 500', fg: this.white, bg: this.blue500 },
      { name: 'White on Slate 900', fg: this.white, bg: this.slate900 },
      { name: 'Slate 300 on Slate 900', fg: this.slate300, bg: this.slate900 },
      { name: 'Emerald 400 on Slate 900', fg: this.emerald400, bg: this.slate900 },
    ]
    
    return combinations.map(combo => ({
      ...combo,
      ...checkWCAGCompliance(combo.fg, combo.bg)
    }))
  }
}

/**
 * Screen reader utilities
 */
export const screenReader = {
  /**
   * Create screen reader only text
   */
  srOnly: 'sr-only absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0',
  
  /**
   * Announce text to screen readers
   */
  announce(text: string, priority: 'polite' | 'assertive' = 'polite') {
    if (typeof window === 'undefined') return
    
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = this.srOnly
    announcement.textContent = text
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }
}

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within an element
   */
  trapFocus(element: HTMLElement) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
    
    element.addEventListener('keydown', handleTabKey)
    firstElement?.focus()
    
    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  },
  
  /**
   * Return focus to previously focused element
   */
  returnFocus(previousElement: HTMLElement | null) {
    if (previousElement && typeof previousElement.focus === 'function') {
      previousElement.focus()
    }
  }
}
