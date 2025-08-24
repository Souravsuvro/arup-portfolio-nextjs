// Design System Tokens for Arup Portfolio
export const designTokens = {
  typography: {
    // Headings
    h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
    h3: 'text-2xl sm:text-3xl md:text-4xl font-bold leading-tight',
    h4: 'text-xl sm:text-2xl md:text-3xl font-semibold leading-tight',
    h5: 'text-lg md:text-xl font-medium leading-tight',
    h6: 'text-base md:text-lg font-medium leading-tight',
    
    // Body text
    subtitle: 'text-lg sm:text-xl md:text-2xl leading-relaxed',
    body: 'text-sm sm:text-base md:text-lg leading-relaxed',
    small: 'text-xs sm:text-sm md:text-base leading-relaxed',
    caption: 'text-xs leading-relaxed'
  },
  
  spacing: {
    // Section spacing
    section: 'py-24',
    sectionSmall: 'py-16',
    
    // Container spacing with better responsive breakpoints
    containerWide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12',
    containerMedium: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
    containerSmall: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
    
    // Component spacing
    cardPadding: 'p-6 md:p-8',
    buttonPadding: 'px-6 py-3 md:px-8 md:py-4',
  },
  
  colors: {
    // Gradients
    gradientPrimary: 'from-emerald-400 to-blue-500',
    gradientSecondary: 'from-blue-500 to-purple-500',
    gradientAccent: 'from-purple-500 to-pink-500',
    
    // Text gradients
    textGradientPrimary: 'bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent',
    textGradientHero: 'bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent',
    
    // Background colors
    cardBg: 'bg-white/5 backdrop-blur-lg border border-white/10',
    navBg: 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50',
  },
  
  animations: {
    // Hover effects
    hoverLift: 'hover:transform hover:-translate-y-1 transition-all duration-300',
    hoverScale: 'hover:scale-105 transition-transform duration-300',
    hoverGlow: 'hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300',
    
    // Focus effects
    focusRing: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
  }
} as const

// Helper function to combine classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
