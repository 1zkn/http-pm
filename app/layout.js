import "@/app/globals.css"

export const metadata = {
  title: "http.pm - Free HTTP API for Testing",
  description: "A free and simple HTTP API service for testing responses, status codes, and more",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white text-gray-900`}>{children}</body>
    </html>
  )
}

