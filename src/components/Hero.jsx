import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2 text-white/80"
        >
          <Rocket size={16} className="text-cyan-300" />
          <span className="text-xs tracking-wide">AI-powered viral trend engine</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          TrendForge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-white/70 max-w-2xl mx-auto"
        >
          Scan the world in real-time, predict virality, and craft content that rides the next wave. A premium, glassmorphic experience built for creators.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button className="relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-lg shadow-cyan-500/20">
            Get Started
          </button>
          <button className="rounded-full px-5 py-3 text-sm font-semibold text-white bg-white/10 backdrop-blur-xl border border-white/20">
            See Live Radar
          </button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-gradient-to-b from-black/0 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
      </div>
    </section>
  );
}
