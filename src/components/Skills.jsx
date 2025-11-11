export default function Skills() {
  const skills = {
    Languages: ['JavaScript', 'PHP', 'SQL', 'HTML', 'CSS', 'Lua'],
    'Frameworks & Tools': ['Node.js', 'XAMPP', 'QBCore', 'OxLib', 'TailwindCSS', 'React', 'Tesseract.js'],
    Specialties: [
      'Anti-cheat and security scripting for FiveM',
      'MySQL & database integration',
      'UI/UX improvements for SaaS-style apps',
      'Debugging server and network systems',
      'API integrations and data automation',
    ],
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Technical Skills</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([title, list]) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                {list.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
