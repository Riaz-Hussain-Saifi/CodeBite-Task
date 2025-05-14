'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PlantCard from '@/components/PlantCard';

export default function HeroTwo() {
  const plant1Ref = useRef<HTMLDivElement>(null);
  const plant2Ref = useRef<HTMLDivElement>(null);
  const plant3Ref = useRef<HTMLDivElement>(null);

  // Add floating animation for plants
  useEffect(() => {
    const animatePlant = (element: HTMLDivElement | null, duration: number, delay: number) => {
      if (element) {
        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      }
    };

    animatePlant(plant1Ref.current, 6, 0);
    animatePlant(plant2Ref.current, 8, 1);
    animatePlant(plant3Ref.current, 7, 0.5);

    return () => {
      if (plant1Ref.current) plant1Ref.current.style.animation = '';
      if (plant2Ref.current) plant2Ref.current.style.animation = '';
      if (plant3Ref.current) plant3Ref.current.style.animation = '';
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="fade-in space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="block">Bring <span className="text-green-600">GREEN</span> to</span>
            <span className="block">your home and</span>
            <span className="block">make you feel <span className="text-green-600">BETTER</span></span>
          </h1>
          <p className="text-gray-600">
            Add natural beauty to your space with our plant care solutions.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-green-600">124K+</h3>
              <p className="text-gray-500">Happy customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">126</h3>
              <p className="text-gray-500">Plant varieties</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">78K</h3>
              <p className="text-gray-500">Reviews</p>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 focus:ring-green-500">
            Find your plant
          </Button>
        </div>

        {/* Right Column - Plant Image */}
        <div className="relative h-[500px] fade-in animate-delay-200">
          <div className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center animate-pulse">
            <Image src="/HeroTwo/Icon.jpg" alt="Plant Lover Icon" width={60} height={60} className="object-contain" />
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/HeroTwo/HeroTwo-1.png"
              alt="Featured plant"
              width={600}
              height={500}
              className="object-contain"
              priority
            />
            <div className="h-4 w-80 bg-gradient-to-t from-gray-200 to-transparent rounded-full mx-auto -mt-4"></div>
          </div>
        </div>
      </div>

      {/* Plant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <PlantCard
          icon={<Image src="/HeroTwo/Card1.png" alt="Plant 1" width={32} height={32} />}
          title="Snake Plant"
          delay={200}
        />
        <PlantCard
          icon={<Image src="/HeroTwo/Card2.png" alt="Plant 2" width={32} height={32} />}
          title="ZZ Plant"
          delay={400}
        />
        <PlantCard
          icon={<Image src="/HeroTwo/Card3.png" alt="Plant 3" width={32} height={32} />}
          title="Monstera"
          delay={600}
        />
      </div>
    </div>
  );
}