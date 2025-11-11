import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section id="about" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Hi, I’m Abdulaziz, a full-stack developer and system builder based in Saudi Arabia.
              I specialize in creating and optimizing web applications, FiveM server systems, and custom automation tools that combine functionality and clean design.
              I enjoy experimenting with frameworks like QBCore, OxLib, and PHP/XAMPP, and I’m passionate about debugging, performance optimization, and UI/UX polish.
            </p>
            <blockquote className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 italic">
              “I build systems that work — fast, reliable, and secure.”
            </blockquote>
          </div>
        </section>
        <Skills />
        <Projects />
        <section id="tools" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tools I Work With</h2>
            <p className="mt-4 text-gray-600">
              Visual Studio Code • XAMPP • GitHub • Discord • MySQL • TailwindCSS • Node.js
            </p>
          </div>
        </section>
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">
          <div className="max-w-7xl mx-auto px-4">“Code isn’t just logic — it’s design, reliability, and curiosity in action.”</div>
        </footer>
      </main>
    </div>
  )
}

export default App
