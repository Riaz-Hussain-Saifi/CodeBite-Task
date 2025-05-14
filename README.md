# CodeBite Frontend Internship Task

This project is a frontend implementation for the CodeBite internship task. It showcases an Educational Platform themed landing page, alongside two other distinct hero sections (Video Creator and Plant Shop), all built with Next.js 15 and Tailwind CSS.

## Features

- Next.js 15 App Router implementation
- Responsive design (mobile, tablet, desktop)
- Tailwind CSS for styling
- Custom animations and transitions
- Component-based architecture
- Three distinct page designs/hero sections:
  - Video Creator Hero (HeroOne)
  - Plant Shop Hero (HeroTwo)
  - Educational Platform Landing Page

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/Riaz-Hussain-Saifi/CodeBite-Task.git
cd codebite-frontend-task
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
├── app/                  # Next.js App Router
│   ├── hero-one/         # Video Creator Hero page
│   ├── hero-two/         # Plant Shop Hero page
│   ├── landing-page/     # Educational Platform Landing Page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page (default route)
├── components/           # React components
│   ├── Landing-Page/     # Landing Page component
│   │   ├── CtaSection.tsx        # CTA Section component
│   │   ├── Features.tsx          # Features Section component
│   │   ├── Footer.tsx            # Footer component
│   │   ├── Header.tsx            # Header component
│   │   ├── Hero.tsx              # Hero component
│   │   ├── PartnerSection.tsx    # Partner Section component
│   │   ├── Testimonials.tsx      # Testimonials Section component
│   │   └── PricingSection.tsx    # Pricing Section component
│   ├── PlantCard.tsx     # Plant Card component
│   ├── Card.tsx          # Card component
│   └── Navbar.tsx        # Navigation component
├── hooks/                # Custom React hooks
│   └── use-mobile.ts     # Hook for detecting mobile devices
├── public/               # Static assets
└── README.md             # Project documentation
\`\`\`

## Pages

- `/` - Main landing page (Educational Platform)
- `/hero-one` - Video Creator Hero
- `/hero-two` - Plant Shop Hero

## Live Demo

**(Optional: I will add a link of deployed project here)**

- You can view the live demo here.

## Animations

The project includes various animations:

- Fade-in animations
- Slide-in animations (left, right, up)
- Staggered animations for child elements
- Hover effects
- Scroll-triggered animations

## Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens

## Technologies Used

- Next.js 15
- React 18
- Tailwind CSS
- TypeScript
- Lucide React (for icons)

## Best Practices

- Semantic HTML
- Accessible UI components
- Component-based architecture
- Responsive design principles
- Clean code with comments
- Proper TypeScript typing
