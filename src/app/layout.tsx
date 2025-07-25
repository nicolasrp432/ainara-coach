import '../styles/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="bg-snow-white text-primary-blue font-sans">
      <body className="bg-snow-white text-primary-blue font-sans antialiased">{children}</body>
    </html>
  )
}
