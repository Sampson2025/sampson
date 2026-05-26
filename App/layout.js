import './globals.css'

export const metadata = {
  title: 'Chinese GoGo - Learn Mandarin Online',
  description: 'Master Mandarin Chinese from beginner to advanced with engaging video lessons',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
