# CodeBite Frontend Task

This project is a frontend implementation for the CodeBite internship task. It showcases an Educational Platform themed landing page, alongside two other distinct hero sections (Video Creator and Plant Shop), all built with **Next.js 15** and **Tailwind CSS**.

## 🚀 Features

- **Next.js 15 App Router** implementation
- **Responsive design** (mobile, tablet, desktop)
- **Tailwind CSS** for styling
- **Custom animations** and transitions
- **Component-based architecture**
- **Three distinct page designs/hero sections**:
  - Video Creator Hero (HeroOne)
  - Plant Shop Hero (HeroTwo)
  - Educational Platform Landing Page

## 🛠️ Quick Start

### Requirements
- Node.js 18.17+

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Riaz-Hussain-Saifi/CodeBite-Task.git
   cd codebite-frontend-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

## Project Structure

```
src/           # Source code
├── app/       # Next.js App Router
│ ├── hero-one/       # Video Creator Hero page
│ ├── hero-two/       # Plant Shop Hero page
│ ├── landing-page/   # Educational Platform Landing Page
│ ├── about/          # About page
│ ├── contact/        # Contact page
│ ├── globals.css     # Global styles
│ ├── layout.tsx      # Root layout
│ └── page.tsx        # Landing page (default route)
├── components/             # React components
│ ├── Landing-Page/         # Landing Page component
│ │ ├── CtaSection.tsx      # CTA Section component
│ │ ├── Features.tsx        # Features Section component
│ │ ├── Footer.tsx          # Footer component
│ │ ├── Header.tsx          # Header component
│ │ ├── Hero.tsx            # Hero component
│ │ ├── PartnerSection.tsx  # Partner Section component
│ │ ├── Testimonials.tsx    # Testimonials Section component
│ │ └── PricingSection.tsx  # Pricing Section component
│ ├── PlantCard.tsx     # Plant Card component
│ ├── Card.tsx          # Card component
│ ├── FeatureBox.tsx    # Feature Box component
│ └── Navbar.tsx        # Navigation component
├── hooks/                # Custom React hooks
│ └── use-mobile.ts       # Hook for detecting mobile devices
├── public/         # Static assets
└── README.md       # Project documentation

```