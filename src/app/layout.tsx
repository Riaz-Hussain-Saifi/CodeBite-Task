import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

// Define the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

// Metadata for the application
export const metadata: Metadata = {
  title: 'CodeBite - Bite-sized Coding Challenges',
  description: 'Level up my coding skills with daily bite-sized challenges',
};

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation bar displayed on all pages */}
        <Navbar />
        
        {/* Main content area */}
        <main className="min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  );
}