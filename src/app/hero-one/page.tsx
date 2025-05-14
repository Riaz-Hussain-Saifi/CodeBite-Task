'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FeatureBox from '@/components/FeatureBox';

export default function HeroOne() {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Add interactive 3D tilt effect on mouse move
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = overlay.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      overlay.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };

    const handleMouseLeave = () => {
      overlay.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    overlay.addEventListener('mousemove', handleMouseMove);
    overlay.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      overlay.removeEventListener('mousemove', handleMouseMove);
      overlay.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="fade-in animate-delay-200 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            <span className="block">Create your</span>
            <span className="block">online videos</span>
          </h1>
          <p className="text-gray-600">
            Unleash your creativity with our video creation tools. Perfect for TikTok, Instagram, and more!
          </p>
          <Button size="lg">Get Started</Button>
        </div>

        {/* Right Column - Image with Overlay */}
        <div ref={overlayRef} className="relative fade-in animate-delay-400">
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src="/HeroOne/Hero.png"
              alt="Video creation in action"
              fill
              className="object-cover rounded-lg grayscale"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center animate-pulse">
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                  <path d="M8 5.14V19.14L19 12.14L8 5.14Z" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-4 border-2 border-dashed border-white rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <FeatureBox
          number="01"
          title="TikTok Videos"
          description="Create engaging TikTok content."
          backgroundColor="bg-red-100"
          icon={<span>🎥</span>}
        />
        <FeatureBox
          number="02"
          title="Instagram Reels"
          description="Design stunning Instagram Reels."
          backgroundColor="bg-yellow-100"
          icon={<span>📹</span>}
        />
        <FeatureBox
          number="03"
          title="YouTube Shorts"
          description="Produce quick YouTube Shorts."
          backgroundColor="bg-blue-100"
          icon={<span>🎬</span>}
        />
        <FeatureBox
          number="04"
          title="Custom Edits"
          description="Personalize your video edits."
          backgroundColor="bg-purple-100"
          icon={<span>✂️</span>}
        />
      </div>
    </div>
  );
}