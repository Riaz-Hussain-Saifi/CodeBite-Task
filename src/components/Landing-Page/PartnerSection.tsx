'use client';

import Image from 'next/image';

export default function PartnersSection() {
  // Section to showcase top partners with their logos
  const partners = [
    { id: 1, src: '/LandingPage/Partner1.jpg', alt: 'Partner 1' },
    { id: 2, src: '/LandingPage/Partner2.jpg', alt: 'Partner 2' },
    { id: 3, src: '/LandingPage/Partner3.jpg', alt: 'Partner 3' },
    { id: 4, src: '/LandingPage/Partner4.jpg', alt: 'Partner 4' },
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Top Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}