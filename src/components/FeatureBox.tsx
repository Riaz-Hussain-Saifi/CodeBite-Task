'use client';

interface FeatureBoxProps {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  animationDelay?: number;
}

export default function FeatureBox({
  number,
  title,
  description,
  icon,
  backgroundColor = 'bg-blue-100',
  animationDelay = 0,
}: FeatureBoxProps) {
  return (
    <div
      className={`rounded-lg p-6 ${backgroundColor} h-full fade-in hover:shadow-lg transition-shadow`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-3xl font-bold text-gray-700 opacity-80">{number}</span>
        {icon && <div className="w-8 h-8">{icon}</div>}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}