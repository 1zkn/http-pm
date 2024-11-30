import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { tailwindColors } from "@/data/colors"

export default function ImageDocs() {
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
          Image API
        </h1>

        <div className="space-y-6">
          <p className="text-xl">
            Use the following endpoint to generate placeholder images:
          </p>
          <pre className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
            <code className="text-lg">
              http.pm/img/[width]x[height]
            </code>
          </pre>

          <div className="space-y-2">
            <p className="text-lg font-medium">Limitations:</p>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Width and height must be between 1 and 2000 pixels</li>
              <li>Only generates simple placeholder images</li>
              <li>Custom background colors are not supported</li>
              <li>Custom text/titles are not supported</li>
            </ul>
          </div>

          <p className="text-lg">Examples:</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><code className="bg-gray-100 px-2 py-1 rounded">http.pm/img/300x200</code> - Returns a 300x200 placeholder image</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">http.pm/img/800x600</code> - Returns an 800x600 placeholder image</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">http.pm/img/1920x1080</code> - Returns a 1920x1080 placeholder image</li>
          </ul>

          
          <p className="text-lg mt-6">
            You can also specify a background color:
          </p>
          <pre className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
            <code className="text-lg">
              http.pm/img/[width]x[height]/[background_color]
            </code>
          </pre>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Available Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-white border border-gray-200"></div>
                <span>white</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <span>black</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-500"></div>
                <span>gray</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <span>lightgray</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                <span>darkgray</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <span>red</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <span>green</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <span>blue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <span>yellow</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-cyan-500"></div>
                <span>cyan</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-fuchsia-500"></div>
                <span>magenta</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                <span>purple</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                <span>orange</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                <span>pink</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-amber-700"></div>
                <span>brown</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-900"></div>
                <span>navy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-teal-500"></div>
                <span>teal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-900"></div>
                <span>maroon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

