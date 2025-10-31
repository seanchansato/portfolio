import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sean Chan-Sato',
  description: 'Personal website of Sean Chan-Sato',
  icons: {
    icon: [
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '16x16' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '48x48' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '96x96' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '192x192' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '256x256' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '384x384' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '512x512' },
      { url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: 'any' },
    ],
    apple: [{ url: '/IMG_3826.PNG?v=2', type: 'image/png', sizes: '180x180' }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
