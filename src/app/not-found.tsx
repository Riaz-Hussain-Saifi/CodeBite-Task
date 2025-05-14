import Link from 'next/link'
import ErrorComponent from '@/components/ErrorComponent'

export default function NotFound() {
  return (
    <ErrorComponent 
      statusCode={404}
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved."
      showHomeButton={true}
    />
  )
}