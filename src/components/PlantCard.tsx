'use client';

interface PlantCardProps {
  icon: React.ReactNode;
  title: string;
  delay?: number;
}

export default function PlantCard({ icon, title, delay = 0 }: PlantCardProps) {
  return (
    <div
      className="border border-gray-200 rounded-xl p-6 flex items-center space-x-4 hover:border-green-400 transition-colors fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-gray-100 rounded-full p-3 flex-shrink-0">{icon}</div>
      <div>
        <p className="text-gray-800 font-medium">{title}</p>
        <p className="text-gray-500 text-sm">Easy to care for</p>
      </div>
    </div>
  );
}