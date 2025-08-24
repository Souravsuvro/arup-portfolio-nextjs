'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from '@/components/ui/LazyMotion'
import { HeartIcon } from '@heroicons/react/24/solid'
import { designTokens } from '@/lib/design-tokens'

export function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-700/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-code-symbols">
          {['{}', '<>', '[]', '()', '/>', '&&', '||', '==='].map((symbol, index) => (
            <motion.div
              key={symbol}
              className="absolute text-emerald-500/20 text-2xl font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>

      <div className={`relative ${designTokens.spacing.containerWide} ${designTokens.spacing.sectionSmall}`}>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8 items-center">
          {/* Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${designTokens.colors.cardBg} ${designTokens.spacing.cardPadding} rounded-2xl`}
          >
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 p-1 animate-pulse">
                  <Image
                    src="/sourav_profile_image.png"
                    alt="Sourav Sarker Suvra"
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className={`${designTokens.typography.h4} text-white mb-2`}>Mr. Paul&apos;s portfolio developed by Sourav Sarker Suvra</h3>
                <p className="text-emerald-400 text-sm mb-3">Full Stack Web Developer</p>
                <p className={`${designTokens.typography.small} text-slate-300 mb-4`}>
                Explore the professional journey, projects, and insights of Sourav Suvro, a passionate web developer and tech enthusiast.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Next.js', 'React', 'TypeScript', 'Python', 'MongoDB', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-md border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="mailto:souravsuvra007@gmail.com"
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 text-sm rounded-lg border border-slate-700 hover:border-emerald-500/30 transition-all duration-200 focus-visible:outline-emerald-500"
                    aria-label="Send email to Sorav Sarker Suvra"
                  >
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    <span>Email</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/sourav007/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 text-sm rounded-lg border border-slate-700 hover:border-blue-500/30 transition-all duration-200 focus-visible:outline-blue-500"
                    aria-label="Visit Sourav Sarker Suvra's LinkedIn profile"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/Souravsuvro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 text-sm rounded-lg border border-slate-700 hover:border-blue-500/30 transition-all duration-200 focus-visible:outline-blue-500"
                    aria-label="Visit Visit Sourav Sarker Suvra's Github profile"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <span>Github</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© 2025 Arup Ratan Paul. Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Sourav Sarker Suvra</span>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
