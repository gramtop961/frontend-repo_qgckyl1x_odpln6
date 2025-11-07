import { motion } from 'framer-motion';
import { Layout, Brush, Video, BarChart3, Map } from 'lucide-react';

export default function StudioAndAnalytics() {
  return (
    <section id="studio" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white/90">Content Studio</h3>
          <div className="rounded-3xl p-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(2,6,23,0.45)]">
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { name: 'Reel', icon: Video },
                { name: 'Short', icon: Layout },
                { name: 'Thumbnail', icon: Brush },
                { name: 'Post', icon: Layout },
              ].map((b) => (
                <button key={b.name} className="rounded-xl px-3 py-2 text-xs text-white/80 bg-white/5 border border-white/10 hover:border-white/20 inline-flex items-center gap-2 justify-center">
                  <b.icon size={14} /> {b.name}
                </button>
              ))}
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
                alt="editor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90">
                <span className="text-sm">Auto-suggested template • Neon Pulse</span>
                <button className="rounded-lg bg-white/10 border border-white/20 px-3 py-1 text-xs">Apply</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white/90">Buzz Tracker</h3>
          <div className="rounded-3xl p-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(2,6,23,0.45)]">
            <div className="flex items-center justify-between mb-3 text-white/70 text-sm">
              <span className="inline-flex items-center gap-2"><Map size={16} /> Global Heat Map</span>
              <span>24h</span>
            </div>
            <div className="grid grid-cols-12 gap-1 h-48">
              {Array.from({ length: 12 * 7 }).map((_, i) => {
                const intensity = Math.sin(i / 7) * 0.5 + 0.5;
                const color = `rgba(56,189,248,${0.15 + intensity * 0.5})`;
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.005 }}
                    className="aspect-square rounded"
                    style={{ background: color }}
                  />
                );
              })}
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-white/90">Profile Dashboard</h3>
          <div className="rounded-3xl p-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(2,6,23,0.45)]">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Followers gained', value: '+12.4k' },
                { label: 'Trends created', value: '48' },
                { label: 'Engagement', value: '8.2%' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl p-3 bg-white/5 border border-white/10">
                  <div className="text-xs text-white/60">{m.label}</div>
                  <div className="text-white text-lg font-semibold">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 h-36 rounded-2xl bg-black/30 ring-1 ring-white/10 p-3">
              <div className="text-xs text-white/60 mb-1 inline-flex items-center gap-2"><BarChart3 size={14} /> Engagement</div>
              <svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad-eng" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(244,114,182,0.9)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
                  </linearGradient>
                </defs>
                <path d="M0,80 L50,70 L100,60 L150,40 L200,30 L250,45 L300,35 L350,28 L400,20" stroke="url(#grad-eng)" strokeWidth="4" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-20 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute -right-10 bottom-10 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
