# Modern Portfolio Website

A sleek and modern portfolio website built with Next.js, React, Tailwind CSS, Shadcn UI components, and Framer Motion animations.

![Portfolio Preview](public/preview.png)

## Features

- 🎨 Modern and clean design with smooth animations
- 🌓 Dark and light mode support
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized performance
- 🧩 Modular and reusable components
- 🔄 Animated page transitions and UI elements
- 📝 Contact form with validation
- 🖼️ Project showcase with filtering
- 📊 Skills visualization
- 🛠️ Built with modern technologies

## Tech Stack

- **Frontend:**
  - Next.js 14 (App Router)
  - React 19
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animations)
  - Shadcn UI (component library)
  - React Hook Form (form handling)
  - Zod (validation)
  - Lucide React (icons)

- **Backend:**
  - Node.js
  - Express
  - Nodemailer (contact form)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your details
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see your portfolio website.

### Contact Form Server

To enable the contact form functionality:

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file with your email credentials.

3. Start the Node.js server:
   ```bash
   node server.js
   ```

## Customization

### Personal Information

Update your personal information in the respective page files:

- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/projects/page.tsx` - Projects page
- `app/skills/page.tsx` - Skills page
- `app/contact/page.tsx` - Contact page

### Theme Colors

Modify the color scheme in `app/globals.css` to match your personal brand.

### Projects

Update the projects array in `app/projects/page.tsx` with your own projects.

### Skills

Update the skills in `app/skills/page.tsx` with your own skill levels.

## Deployment

This portfolio can be easily deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Import your repository to Vercel.
3. Configure environment variables in Vercel dashboard.
4. Deploy!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Feel free to customize this portfolio to showcase your own work and personal brand!
