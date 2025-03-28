"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getBasePath } from '@/lib/utils'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Handle potential path issues in development/production
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      const basePath = getBasePath()
      
      // Check common issues with paths
      if (basePath && !path.includes(basePath)) {
        // Missing base path, redirect to home with base path
        router.push(basePath)
        return
      } else if (path.includes(`${basePath}${basePath}`)) {
        // Duplicated base path, fix it
        const fixedPath = path.replace(`${basePath}${basePath}`, basePath)
        router.push(fixedPath)
        return
      }
      
      // Default fallback to home page after 3 seconds
      const timer = setTimeout(() => {
        router.push(basePath || '/')
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white p-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold mb-6 text-gradient-accent">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
          Redirecting you to the home page...
        </p>
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-teal-500 to-blue-400 animate-redirect-progress"></div>
        </div>
      </div>
    </div>
  )
} 