import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Image as ImageIcon, Loader2 } from 'lucide-react';

const categories = ['tech', 'fashion', 'fitness', 'memes'];

export default function IdeaGenerator() {
  const [category, setCategory] = useState('tech');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState([]);

  const generate = async () => {
    setLoading(true);
    // Mock AI generation client-side for demo; backend can replace this later
    await new Promise((r) => setTimeout(r, 900));
    const presets = {
      tech: [
        {
          title: '30-sec AI Hack: Turn Notes → Slides',
          caption: 'Show a before/after swipe. Add neon cursor trail effect.',
          img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
        },
        {
          title: 'This USB-C tip saved my Mac',
          caption: 'Quick montage with kinetic typography, punchy transitions.',
          img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
        },
      ],
      fashion: [
        {
          title: 'AI Outfit Roulette',
          caption: 'Tap to morph styles: streetwear → cyber chic → minimal luxe.',
          img: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=1200&auto=format&fit=crop',
        },
        {
          title: 'Thrift Flip in 20s',
          caption: 'Before/after + upbeat pacing + bounce zooms.',
          img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
        },
      ],
      fitness: [
        {
          title: 'Micro-Workout: 5×20s Desk Burn',
          caption: 'Timer overlay, neon ring progress, pop haptics.',
          img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
        },
        {
          title: 'Protein Myth Bust',
          caption: 'Cut jump edits with charts + simple infographics.',
          img: 'https://images.unsplash.com/photo-1517341729456-8b5627e13d35?q=80&w=1200&auto=format&fit=crop',
        },
      ],
      memes: [
        {
          title: 'When the Wi‑Fi hits 1 bar',
          caption: 'Freeze-frame captions + record scratch + punchline.',
          img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
        },
        {
          title: 'POV: You open 48 tabs',
          caption: 'Overhead chaos + speed ramp + giant cursor gag.',
          img: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1200&auto=format&fit=crop',
        },
      ],
    };
    const next = (presets[category] || []).map((x, i) => ({ ...x, id: `${category}-${i}-${Date.now()}` }));
    setIdeas(next);
    setLoading(false);
  };

  return (
    <section id="ideas" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300">AI Idea Generator</h2>
        </div>

        <div className="grid sm:grid-cols-[320px_1fr] gap-6">
          <div className="rounded-2xl p-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(2,6,23,0.45)]">
            <label className="block text-sm text-white/70 mb-2">Category</label>
            <div className="grid grid-cols-4 gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-xl px-3 py-2 text-sm capitalize border transition ${
                    category === c
                      ? 'bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 border-white/30 text-white'
                      : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <button
              onClick={generate}
              className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-lg shadow-cyan-500/20"
            >
              <Wand2 size={16} /> Generate ideas
            </button>
          </div>

          <div className="min-h-[200px]">
            <AnimatePresence mode="popLayout">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-48 text-white/70"
                >
                  <Loader2 className="animate-spin mr-2" />
                  Generating...
                </motion.div>
              ) : ideas.length === 0 ? (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/60">
                  Pick a category and generate ready-to-post concepts.
                </motion.div>
              ) : (
                <motion.div key="grid" layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ideas.map((idea) => (
                    <motion.div
                      layout
                      key={idea.id}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10"
                    >
                      <div className="h-40 w-full overflow-hidden">
                        <img src={idea.img} alt="idea" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="text-white font-medium">{idea.title}</div>
                        <div className="text-white/70 text-sm">{idea.caption}</div>
                        <button className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-white/90 bg-white/10 border border-white/10"><ImageIcon size={14} /> Create asset</button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-6 right-10 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
