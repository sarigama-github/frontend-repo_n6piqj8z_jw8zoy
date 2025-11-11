import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 w-full">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full w-fit">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" /> Available for freelance & collaborations
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Abdulaziz — Full‑Stack Developer & System Builder
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            I create fast, reliable, and secure systems across web apps and FiveM servers. I love debugging, performance optimization, and polished UI/UX.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
    </section>
  );
}
