'use client';

import React from 'react';
import Image from 'next/image';

// Props interface for the Card component
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
  image?: {
    src: string;
    alt: string;
  };
  icon?: React.ReactNode;
  animationDelay?: number;
}

// Card component with different variants
export default function Card({
  children,
  variant = 'default',
  className = '',
  image,
  icon,
  animationDelay = 0,
}: CardProps) {
  // Base card styles
  const baseStyles = 'rounded-lg overflow-hidden h-full fade-in';
  
  // Variant-specific styles
  const variantStyles = {
    default: '',
    outlined: 'border border-gray-200',
    elevated: 'shadow-md',
  };
  
  // Combine all styles
  const cardStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  return (
    <div 
      className={cardStyles}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {image && (
        <div className="relative h-40 w-full">
          <Image 
            src={image.src} 
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {icon && (
          <div className="mb-4">
            {icon}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}