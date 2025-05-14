import Link from 'next/link'

interface ErrorComponentProps {
  statusCode: number
  title: string
  description: string
  showHomeButton?: boolean
  showResetButton?: boolean
  reset?: () => void
}

export default function ErrorComponent({
  statusCode,
  title,
  description,
  showHomeButton = false,
  showResetButton = false,
  reset
}: ErrorComponentProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Status Code */}
        <div className="text-8xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {statusCode}
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        
        {/* Description */}
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showHomeButton && (
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition font-medium"
            >
              Go Home
            </Link>
          )}
          
          {showResetButton && reset && (
            <button
              onClick={reset}
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition font-medium"
            >
              Try Again
            </button>
          )}
        </div>
        
        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Need help?{' '}
            <Link href="/contact" className="text-purple-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}