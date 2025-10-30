export default function Contact() {
  return (
    <section id="contact" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Contact Me!</h2>
          <a
            href="mailto:seanchansato@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white/15 transition-colors"
          >
            seanchansato@gmail.com
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://www.linkedin.com/in/seanchansato/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-3 md:p-4 text-white">
            {/* LinkedIn (lucide) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://x.com/seanchansato" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-3 md:p-4 text-white">
            {/* X (Twitter) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.59L22 22h-6.5l-5-6.59L4.5 22H1.25l8.08-9.25L2 2h6.5l4.5 6L18.244 2zm-1.12 18h2.13L8.44 4h-2.13l10.81 16z" />
            </svg>
          </a>
          <a href="https://github.com/seanchansato" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-3 md:p-4 text-white">
            {/* GitHub (lucide) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87A3.37 3.37 0 0 0 16 15c3.61-.4 7-1.76 7-7.61a5.44 5.44 0 0 0-1.5-3.78A5.07 5.07 0 0 0 21 3s-1.64-.52-5 .61A13.38 13.38 0 0 0 3 3s-.52 1.76 0 5.6A5.44 5.44 0 0 0 1.5 12.39C1.5 18.65 5.39 20 9 19z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
