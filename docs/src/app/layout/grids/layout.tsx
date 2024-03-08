export const metadata = {
  title: 'docs - Grids',
  description: 'documentation for grids of invrz patterns ui library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
