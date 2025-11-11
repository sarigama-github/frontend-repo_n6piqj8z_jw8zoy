export default function Projects() {
  const projects = [
    {
      title: 'QBCore Extended System',
      desc: 'Custom FiveM server framework extension integrating OxLib UI and anti-cheat logic.',
      bullets: [
        'Enhanced server-side security and admin control',
        'Modern UI components using OxLib and Tailwind',
        'Configurable system for role management and player logs',
      ],
    },
    {
      title: 'Anti-Cheat OCR System',
      desc: 'Tesseract.js-based detection tool to recognize cheat-related UI overlays.',
      bullets: [
        'Detects banned keywords using OCR scanning',
        'Lightweight worker system with retry logic',
        'Smart performance management',
      ],
    },
    {
      title: 'PHP Image Compressor (Tinify Integration)',
      desc: 'Web-based tool for automated image compression via TinyPNG API.',
      bullets: [
        'Built using PHP and XAMPP stack',
        'Handles multiple file uploads',
        'Error-safe configuration for local development',
      ],
    },
    {
      title: 'MySQL Server Management Tools',
      desc: 'SQL scripts and PHP tools to simplify table creation and CRUD operations.',
      bullets: [
        'CLI-based quick testing utilities',
        'Error-free syntax correction and validation',
        'Suitable for student or production use',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Projects</h2>
          <a href="https://github.com/abdulaziz-dev" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-700 hover:text-gray-900">View GitHub →</a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-gray-400">•</span><span>{b}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
