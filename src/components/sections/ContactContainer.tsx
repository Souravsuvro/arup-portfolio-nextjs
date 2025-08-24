'use client'

import { useState } from 'react'
import { motion } from '@/components/ui/LazyMotion'

export function ContactContainer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'arup.paul@example.com',
      href: 'mailto:arup.paul@example.com'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/arup-paul',
      href: 'https://linkedin.com/in/arup-paul'
    },
    {
      icon: 'fab fa-orcid',
      label: 'ORCID',
      value: '0009-0008-4894-8008',
      href: 'https://orcid.org/0009-0008-4894-8008'
    }
  ]


  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Interested in collaboration, research opportunities, or have questions about my work? 
          I&apos;d love to hear from you. Let&apos;s discuss how we can work together on environmental solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
              <div className="flex items-center gap-3 text-emerald-300">
                <i className="fas fa-check-circle"></i>
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="research-collaboration">Research Collaboration</option>
                <option value="academic-partnership">Academic Partnership</option>
                <option value="consulting">Consulting Opportunity</option>
                <option value="speaking-engagement">Speaking Engagement</option>
                <option value="media-inquiry">Media Inquiry</option>
                <option value="general-inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-vertical"
                placeholder="Tell me about your project, collaboration idea, or question..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Contact Details */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`${contact.icon} text-white`}></i>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">{contact.label}</div>
                    <div className="text-white group-hover:text-emerald-400 transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Response */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-clock text-emerald-400"></i>
              <h3 className="font-semibold text-white">Response Time</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              I typically respond to messages within 24-48 hours. For urgent research collaborations 
              or time-sensitive opportunities, please mention &quot;URGENT&quot; in your subject line.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
