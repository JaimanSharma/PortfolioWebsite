# Jaiman Sharma - Portfolio Website

A modern, dark-themed personal portfolio website built with Next.js (App Router) and Tailwind CSS.

## Features

- **Dark Theme**: Professional near-black background with cyan accent colors
- **Fully Responsive**: Optimized for all screen sizes
- **Smooth Animations**: Subtle Framer Motion animations for a polished feel
- **SEO Optimized**: Proper metadata and OpenGraph tags
- **Accessible**: High contrast, focus states, and reduced motion support

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add your resume PDF:
   - Place your resume PDF file at `public/resume.pdf`

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Content

All content is stored in `lib/content.ts`. Edit this file to update:
- Personal information (name, email, social links)
- Hero section content
- Experience entries
- Projects
- Skills
- About section text

### Styling

- Colors are defined in `tailwind.config.ts` under the `theme.extend.colors` section
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Adding a New Section

1. Add the section content to `lib/content.ts` if needed
2. Create a new section in `app/page.tsx` using the `Section` component
3. Add a navigation link in `components/Nav.tsx`

### Adding Projects

Edit the `projects` array in `lib/content.ts`:

```typescript
{
  name: "Project Name",
  type: "Project Type",
  description: "What it is...",
  why: "Why it matters...",
  tech: ["Tech1", "Tech2"],
  engineeringAngle: "Engineering details...", // optional
  links: {
    github: "https://github.com/...",
    demo: "https://demo.com" // optional
  }
}
```

### Adding Experience

Edit the `experience` array in `lib/content.ts`:

```typescript
{
  company: "Company Name",
  role: "Role Title",
  period: "Time Period",
  bullets: [
    "Achievement 1",
    "Achievement 2"
  ],
  tech: ["Tech1", "Tech2"] // optional
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting platform's instructions for deploying Next.js applications.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main homepage with all sections
├── components/
│   ├── Nav.tsx           # Navigation bar
│   ├── Section.tsx       # Reusable section wrapper
│   ├── SectionHeading.tsx # Section heading with animation
│   └── Card.tsx          # Reusable card component
├── lib/
│   └── content.ts        # All site content (edit this!)
├── public/
│   └── resume.pdf        # Your resume PDF
└── ...config files
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Inter & JetBrains Mono** - Typography

## License

Personal portfolio - feel free to use as a template for your own site!

