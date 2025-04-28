# Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Contact Form Setup

The contact form uses EmailJS to send emails. You need to set up an EmailJS account and configure it to make the form work:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (e.g., connect your Gmail account)
3. Create a new Email Template with the following variables:
   - `name` - Sender's name
   - `email` - Sender's email
   - `subject` - Email subject
   - `message` - Email content
4. Get your API keys from the EmailJS dashboard
5. Update the following constants in `src/components/sections/ContactSection.tsx`:
   ```typescript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```

## Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment

The built application is in the `dist` folder and can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages. 