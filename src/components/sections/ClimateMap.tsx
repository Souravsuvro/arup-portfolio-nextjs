'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ClimateHotspot } from '@/types'

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

interface ClimateMapProps {
  hotspots: ClimateHotspot[]
  selectedLayer: string
  onHotspotSelect: (hotspot: ClimateHotspot) => void
}

export default function ClimateMap({ hotspots, selectedLayer, onHotspotSelect }: ClimateMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      zoomControl: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      dragging: true
    })

    // Add tile layer with dark theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapInstanceRef.current) return

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current?.removeLayer(marker)
    })
    markersRef.current = []

    // Add hotspot markers
    hotspots.forEach(hotspot => {
      const severityColors = {
        low: '#10b981',
        medium: '#f59e0b', 
        high: '#f97316',
        critical: '#ef4444'
      }

      const color = severityColors[hotspot.severity as keyof typeof severityColors]

      // Create custom icon based on severity and type
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background-color: ${color};
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            color: white;
            font-weight: bold;
          ">
            ${hotspot.type === 'Sea Level Rise' ? '🌊' : 
              hotspot.type === 'Ice Melting' ? '🧊' :
              hotspot.type === 'Deforestation' ? '🌳' :
              hotspot.type === 'Drought' ? '🏜️' :
              hotspot.type === 'Ocean Acidification' ? '🐠' :
              hotspot.type === 'Extreme Weather' ? '🔥' : '⚠️'}
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })

      const marker = L.marker([hotspot.lat, hotspot.lng], { icon: customIcon })
        .addTo(mapInstanceRef.current!)
        .bindPopup(`
          <div style="color: #1e293b; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #0f172a; font-size: 16px; font-weight: bold;">
              ${hotspot.name}
            </h3>
            <div style="margin-bottom: 8px;">
              <span style="
                background-color: ${color}20;
                color: ${color};
                padding: 2px 8px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 500;
                border: 1px solid ${color}40;
              ">
                ${hotspot.type}
              </span>
            </div>
            <p style="margin: 8px 0; color: #475569; font-size: 14px; line-height: 1.4;">
              ${hotspot.description}
            </p>
            <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e2e8f0;">
              <strong style="color: #0f172a; font-size: 13px;">Impact:</strong>
              <br>
              <span style="color: #475569; font-size: 12px;">${hotspot.impact}</span>
            </div>
          </div>
        `)
        .on('click', () => {
          onHotspotSelect(hotspot)
        })

      markersRef.current.push(marker)
    })
  }, [hotspots, onHotspotSelect])

  return (
    <div 
      ref={mapRef} 
      className="h-[600px] w-full rounded-2xl overflow-hidden border border-slate-600/30"
      style={{ zIndex: 1 }}
      role="application"
      aria-label="Interactive climate hotspots map showing environmental data points"
      tabIndex={0}
    />
  )
}
