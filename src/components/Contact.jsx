export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact</h2>
        <p className="mt-3 text-gray-600">
          Prefer email or GitHub for collaborations. Discord works for quick chats.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <a href="mailto:abdulaziz.dev@example.com" className="px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors">Email: abdulaziz.dev@example.com</a>
          <a href="https://github.com/abdulaziz-dev" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors">GitHub: github.com/abdulaziz-dev</a>
          <div className="text-sm text-gray-500">Discord: Abdulaziz#1234 • Saudi Arabia</div>
        </div>
      </div>
    </section>
  );
}
