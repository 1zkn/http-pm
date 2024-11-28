import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function StatusDocs() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-16 space-y-8">
        <div className="flex items-center mb-8">
          <Link href="/docs" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Docs
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          HTTP Status Codes
        </h1>
        
        <div className="space-y-6">
          <p className="text-xl">
            Use the following endpoint to get a specific HTTP status code:
          </p>
          <pre className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
            <code className="text-lg">
              http.pm/status/[code]
            </code>
          </pre>
          <p className="text-lg">Examples:</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><code className="bg-gray-100 px-2 py-1 rounded">http.pm/status/200</code> - Returns a 200 OK status</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">http.pm/status/404</code> - Returns a 404 Not Found status</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">http.pm/status/500</code> - Returns a 500 Internal Server Error status</li>
          </ul>
          <p className="text-lg mt-6">
            To get the response in JSON format, add the <code className="bg-gray-100 px-2 py-1 rounded">format=json</code> query parameter:
          </p>
          <pre className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
            <code className="text-lg">
              http.pm/status/[code]?format=json
            </code>
          </pre>
        </div>
      </div>
    </main>
  )
}

