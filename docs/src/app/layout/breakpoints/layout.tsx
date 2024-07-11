export const metadata = {
  title: 'Docs - Breakpoints',
  description: 'documentation for diffent view types of invrz patterns ui library',
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
