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
          <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-3 md:p-4 text-white">
            {/* LinkedIn (shadcn/lucide) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-3 md:p-4 text-white">
            {/* X (Twitter) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.59L22 22h-6.5l-5-6.59L4.5 22H1.25l8.08-9.25L2 2h6.5l4.5 6L18.244 2zm-1.12 18h2.13L8.44 4h-2.13l10.81 16z" />
            </svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-3 md:p-4 text-white">
            {/* YouTube (shadcn/lucide) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
