import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowLeft, Code2, Wrench } from 'lucide-react'

export default function Docs() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-16 space-y-8">
        <div className="flex items-center mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          http.pm Documentation
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border-gray-200 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                HTTP Status Codes
              </CardTitle>
              <CardDescription className="text-gray-600">
                Test different HTTP status codes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Use our HTTP Status Codes API to test various response codes.</p>
              <Link href="/status" className="text-blue-600 hover:underline mt-4 inline-block">
                View Status Codes Documentation
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Future Tools
              </CardTitle>
              <CardDescription className="text-gray-600">
                More HTTP testing tools coming soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>We're working on additional tools to enhance HTTP testing. Stay tuned for updates!</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Custom headers testing</li>
                <li>Request body echo</li>
                <li>Delayed responses</li>
                <li>And more...</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

