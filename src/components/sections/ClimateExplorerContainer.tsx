'use client'

import { useState, useEffect } from 'react'
import { motion } from '@/components/ui/LazyMotion'
import dynamic from 'next/dynamic'
import { climateHotspots, globalClimateData, climateDataLayers } from '@/data/climateData'
import { ClimateHotspot } from '@/types'

// Dynamically import the map component to avoid SSR issues
const ClimateMap = dynamic(() => import('./ClimateMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-slate-800/50 rounded-2xl flex items-center justify-center">
      <div className="text-slate-400">Loading interactive map...</div>
    </div>
  )
})

export function ClimateExplorerContainer() {
  const [selectedLayer, setSelectedLayer] = useState('temperature')
  const [selectedHotspot, setSelectedHotspot] = useState<ClimateHotspot | null>(null)
  const [timeRange, setTimeRange] = useState({ start: 2020, end: 2024 })

  const currentLayerData = climateDataLayers.find(layer => layer.id === selectedLayer)
  const filteredData = globalClimateData.filter(
    data => data.year >= timeRange.start && data.year <= timeRange.end
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Climate Data Explorer
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
          Explore interactive climate data visualizations, environmental hotspots, and global trends. 
          Understand the impact of climate change through data-driven insights.
        </p>
      </motion.div>

      {/* Controls Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Data Layer Selection */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Data Layer</h3>
            <div className="space-y-2">
              {climateDataLayers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    selectedLayer === layer.id
                      ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
                      : 'bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:bg-slate-600/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: layer.color }}
                    />
                    <div>
                      <div className="font-medium">{layer.name}</div>
                      <div className="text-sm opacity-75">{layer.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Range */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Time Range</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Start Year</label>
                <select
                  value={timeRange.start}
                  onChange={(e) => setTimeRange(prev => ({ ...prev, start: parseInt(e.target.value) }))}
                  className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                >
                  {[2020, 2021, 2022, 2023].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">End Year</label>
                <select
                  value={timeRange.end}
                  onChange={(e) => setTimeRange(prev => ({ ...prev, end: parseInt(e.target.value) }))}
                  className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                >
                  {[2021, 2022, 2023, 2024].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Current Data Display */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Current Data</h3>
            {currentLayerData && (
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: currentLayerData.color }}
                  />
                  <span className="font-medium text-white">{currentLayerData.name}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {selectedLayer === 'temperature' && `${filteredData[filteredData.length - 1]?.temperature || 0}°C`}
                  {selectedLayer === 'co2' && `${filteredData[filteredData.length - 1]?.co2 || 0} ppm`}
                  {selectedLayer === 'seaLevel' && `${filteredData[filteredData.length - 1]?.seaLevel || 0} cm`}
                  {selectedLayer === 'precipitation' && `${filteredData[filteredData.length - 1]?.precipitation || 0} mm`}
                </div>
                <div className="text-sm text-slate-400">{currentLayerData.description}</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
      >
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">Global Climate Hotspots</h3>
          <p className="text-slate-400">Click on markers to explore climate impact areas around the world</p>
        </div>
        
        <ClimateMap
          hotspots={climateHotspots}
          selectedLayer={selectedLayer}
          onHotspotSelect={setSelectedHotspot}
        />
      </motion.div>

      {/* Hotspot Details */}
      {selectedHotspot && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedHotspot.name}</h3>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  selectedHotspot.severity === 'critical'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : selectedHotspot.severity === 'high'
                    ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {selectedHotspot.severity} severity
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                  {selectedHotspot.type}
                </span>
              </div>
            </div>
            <button
              onClick={() => setSelectedHotspot(null)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <p className="text-slate-300 mb-4 leading-relaxed">{selectedHotspot.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">Impact Assessment</h4>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-slate-300">{selectedHotspot.impact}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Local Climate Data</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-white">{selectedHotspot.data.temperature}°C</div>
                  <div className="text-xs text-slate-400">Temperature</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-white">{selectedHotspot.data.precipitation}mm</div>
                  <div className="text-xs text-slate-400">Precipitation</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-white">{selectedHotspot.data.co2}ppm</div>
                  <div className="text-xs text-slate-400">CO₂ Level</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-white">{selectedHotspot.data.seaLevel}cm</div>
                  <div className="text-xs text-slate-400">Sea Level</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Statistics Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {climateDataLayers.map((layer, index) => {
          const latestValue = filteredData[filteredData.length - 1]
          let value = ''
          
          switch (layer.id) {
            case 'temperature':
              value = `${latestValue?.temperature || 0}°C`
              break
            case 'co2':
              value = `${latestValue?.co2 || 0} ppm`
              break
            case 'seaLevel':
              value = `${latestValue?.seaLevel || 0} cm`
              break
            case 'precipitation':
              value = `${latestValue?.precipitation || 0} mm`
              break
          }

          return (
            <div
              key={layer.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${layer.color}20`, border: `1px solid ${layer.color}30` }}
              >
                <i className="fas fa-chart-line" style={{ color: layer.color }}></i>
              </div>
              <div className="text-2xl font-bold text-white mb-2">{value}</div>
              <div className="text-sm text-slate-400">{layer.name}</div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
