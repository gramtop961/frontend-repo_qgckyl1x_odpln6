import Hero from './components/Hero';
import TrendRadar from './components/TrendRadar';
import IdeaGenerator from './components/IdeaGenerator';
import StudioAndAnalytics from './components/StudioAndAnalytics';

function App() {
  return (
    <div className="min-h-screen bg-[#050812] text-white selection:bg-cyan-300/30 selection:text-white">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#050812]/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <div className="font-semibold tracking-tight">TrendForge</div>
          <nav className="hidden sm:flex items-center gap-6 text-white/70 text-sm">
            <a href="#radar" className="hover:text-white">Radar</a>
            <a href="#ideas" className="hover:text-white">Ideas</a>
            <a href="#studio" className="hover:text-white">Studio</a>
          </nav>
          <button className="rounded-full px-4 py-1.5 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 to-emerald-300">Sign in</button>
        </div>
      </header>

      <main>
        <Hero />
        <TrendRadar />
        <IdeaGenerator />
        <StudioAndAnalytics />
      </main>

      <footer className="py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} TrendForge • Crafted for creators</footer>
    </div>
  );
}

export default App;
