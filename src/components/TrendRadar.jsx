import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Hash } from 'lucide-react';

const spark = (points) => {
  const width = 160;
  const height = 56;
  const step = width / (points.length - 1);
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = (v) => ((v - min) / (max - min + 0.0001)) * (height - 8) + 4;
  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${height - norm(p)}`)
    .join(' ');
  return { d, width, height };
};

const TrendCard = ({ trend }) => {
  const { d, width, height } = useMemo(() => spark(trend.sparkline), [trend.sparkline]);
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative w-[280px] shrink-0 rounded-3xl p-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(2,6,23,0.45)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-emerald-500/10 pointer-events-none" />
      <div className="relative space-y-3">
        <div className="h-36 w-full rounded-2xl overflow-hidden ring-1 ring-white/10">
          <img src={trend.image} alt={trend.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-white/90 font-semibold tracking-tight">{trend.title}</h3>
          <div className="flex items-center gap-1 text-emerald-300 text-sm">
            <Flame size={16} />
            <span>{trend.virality}%</span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {trend.tags.map((t) => (
            <span key={t} className="text-xs text-white/70 bg-white/5 rounded-full px-2 py-1 ring-1 ring-white/10 inline-flex items-center gap-1">
              <Hash size={12} /> {t}
            </span>
          ))}
        </div>
        <div className="mt-2 rounded-2xl bg-black/30 ring-1 ring-white/10 p-3">
          <div className="flex items-center justify-between mb-1 text-xs text-white/60">
            <span className="inline-flex items-center gap-1"><Activity size={14} /> Rising</span>
            <span>24h</span>
          </div>
          <svg width={width} height={height} className="w-full h-14">
            <defs>
              <linearGradient id={`grad-${trend.id}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(34,197,94,0.9)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
              </linearGradient>
            </defs>
            <path d={d} stroke={`url(#grad-${trend.id})`} strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default function TrendRadar() {
  const trends = useMemo(() => [
    {
      id: 't1',
      title: 'Neon Core Aesthetics',
      virality: 92,
      image: 'https://images.unsplash.com/photo-1581181780490-cd1df3c8ee40?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQ29yZSUyMEFlc3RoZXRpY3N8ZW58MHwwfHx8MTc2MjUwMDczM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      tags: ['neon', 'futurism', 'ui'],
      sparkline: [3,4,5,6,7,8,12,14,13,16,19,23,28],
    },
    {
      id: 't2',
      title: 'GenAI Outfit Swaps',
      virality: 87,
      image: 'https://images.unsplash.com/photo-1632773003373-6645a802c154?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHZW5BSSUyME91dGZpdCUyMFN3YXBzfGVufDB8MHx8fDE3NjI1MDA3MzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      tags: ['fashion', 'ai', 'filters'],
      sparkline: [2,2,3,3,4,6,9,12,16,20,24,27,29],
    },
    {
      id: 't3',
      title: '10s Micro-Guides',
      virality: 78,
      image: 'https://images.unsplash.com/photo-1695634621145-9133286e0247?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwxMHMlMjBNaWNyby1HdWlkZXN8ZW58MHwwfHx8MTc2MjUwMDczNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      tags: ['shorts', 'education', 'howto'],
      sparkline: [1,2,2,3,5,8,8,10,11,12,14,15,19],
    },
    {
      id: 't4',
      title: 'Desk Setup Stories',
      virality: 83,
      image: 'https://images.unsplash.com/photo-1705417272217-490f4511abeb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNrJTIwU2V0dXAlMjBTdG9yaWVzfGVufDB8MHx8fDE3NjI1MDA3MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      tags: ['workspace', 'stories', 'productivity'],
      sparkline: [1,1,2,4,4,6,7,9,12,12,13,16,18],
    },
  ], []);

  return (
    <section id="radar" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300">Trend Radar</h2>
            <p className="text-white/60">Live scan of emerging waves across social platforms</p>
          </div>
        </div>

        <motion.div
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
        >
          {trends.map((t) => (
            <TrendCard key={t.id} trend={t} />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
