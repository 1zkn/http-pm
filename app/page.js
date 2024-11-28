import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-16 text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          http.pm
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          A free and simple HTTP API for testing responses, status codes, and more.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/docs">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com/1zkn/http.pm" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
      <footer className="absolute bottom-4 text-center text-sm text-gray-500">
        <p>Open source HTTP testing service</p>
      </footer>
    </main>
  )
}

