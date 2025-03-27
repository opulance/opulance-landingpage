# Opulance AI Landing Page

A modern, responsive landing page for Opulance AI showcasing their artificial intelligence solutions and services.

## 🚀 Live Demo

Visit the live site at [https://opulance.github.io/opulance-landingpage/](https://opulance.github.io/opulance-landingpage/)

## ✨ Features

- Modern UI with sleek animations and transitions
- Fully responsive design that works on all device sizes
- Interactive components including testimonial carousel, feature showcase, and more
- Optimized for performance with Next.js static site generation
- Deployed to GitHub Pages with automated workflow

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI/Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: GitHub Pages via GitHub Actions
- **Development**: TypeScript

## 🏁 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/opulance/opulance-landingpage.git
   cd opulance-landingpage
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
opulance-landingpage/
├── .github/            # GitHub Actions workflows
├── public/             # Static assets
│   ├── images/         # Image assets 
│   └── .nojekyll       # Prevents GitHub Pages from using Jekyll
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (header, footer, etc.)
│   │   └── ui/         # Reusable UI components
│   └── lib/            # Utility functions
├── next.config.ts      # Next.js configuration
└── tailwind.config.ts  # TailwindCSS configuration
```

## 🌐 Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The deployment process:

1. Builds the project with `next build` (static export)
2. Creates necessary files for GitHub Pages (like `.nojekyll`)
3. Pushes the built files to the `gh-pages` branch
4. GitHub Pages serves the content from this branch

## 🔄 Base Path Handling

The application is configured to work both locally and when deployed to GitHub Pages by:

1. Using a custom utility function (`getBasePath`) to determine the current environment
2. Automatically adjusting asset paths and links based on the environment
3. Supporting both development and production builds with the same codebase

## 📝 License

This project is open source and available under the MIT License.

## 🧑‍💻 Development

### Adding New Components

To add new components, create files in the `src/components` directory following the existing patterns.

### Modifying Styles

This project uses TailwindCSS for styling. Modify the `tailwind.config.ts` file to adjust the theme.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
