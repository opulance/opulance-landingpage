# Opulance AI Landing Page

Modern, high-performance landing page for Opulance AI, featuring interactive 3D visuals, AI chatbot, and integrated client inquiry system.

![Opulance AI](public/images/og-image-info.txt)

## Features

- **Interactive 3D Visual Elements**: Engaging WebGL-powered animations with performance optimization
- **AI Chatbot**: Interactive assistant to answer visitor questions
- **Calendly Integration**: Seamless meeting scheduling
- **Multi-step Inquiry Form**: Client project inquiry with validation
- **Performance Optimization**: Intelligent effects based on device capabilities
- **Responsive Design**: Mobile-first approach for all screen sizes
- **SEO Optimization**: Meta tags, Schema.org markup, and sitemap

## Tech Stack

- [Next.js 14](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod) validation
- [Vercel Analytics](https://vercel.com/analytics) for user tracking
- [Shadcn/UI](https://ui.shadcn.com/) components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/opulance-ai/opulance-landingpage.git
   cd opulance-landingpage
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The landing page is configured for GitHub Pages deployment:

```bash
npm run build
# This creates a static export in the 'out' directory
```

You can also deploy to Vercel or Netlify with zero configuration.

## Project Structure

```
├── public/            # Static assets, images
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── api/       # API routes
│   │   ├── page.tsx   # Home page
│   │   └── layout.tsx # Root layout
│   ├── components/    # React components
│   │   ├── layout/    # Layout components
│   │   └── ui/        # UI components
│   └── lib/           # Utilities, hooks, types
├── .documentation/    # Project documentation
└── ...
```

## Customization

### Branding

Update your branding by modifying the following files:

- `src/app/layout.tsx`: Metadata and OpenGraph
- `public/images/`: Logo and OG images
- `src/components/SchemaMarkup.tsx`: Company information

### Effects and Performance

The application intelligently detects device capabilities and adjusts visual effects accordingly. Users can manually toggle effects using the bottom-right button.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics inspiration
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations

## Email Integration with FormSpree

The contact form is integrated with FormSpree for easy form submission without requiring a backend. To set this up:

1. Create a [FormSpree account](https://formspree.io/register) (free tier offers 50 submissions/month)
2. Create a new form in your FormSpree dashboard
3. Copy your form endpoint ID (it looks like `xrgykyzl`)
4. Update the `FORMSPREE_ENDPOINT` constant in `src/components/layout/EmailForm.tsx`:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
5. Optional: Configure form settings in your FormSpree dashboard:
   - Add email notifications
   - Set up integrations with other services
   - Configure spam protection
   - Add custom email templates

FormSpree works perfectly with static sites hosted on GitHub Pages, with no server-side code required.
