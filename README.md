# Alex Chen — Full Stack Developer Portfolio

A modern, dark-themed portfolio website built with React, Tailwind CSS v4, and Framer Motion. Features terminal/code-inspired aesthetics with smooth animations and a fully responsive design.

## 🛠 Tech Stack

- **React** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first CSS framework
- **Framer Motion** — Animation library
- **Lucide React** — Icon library

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd alex-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Root app component
├── index.css                 # Design system + Tailwind config
├── components/
│   ├── Navbar.jsx            # Fixed top navigation
│   ├── Footer.jsx            # Minimal footer
│   ├── ParticleBackground.jsx # Canvas code-symbol particles
│   └── SectionHeader.jsx     # Reusable section heading
├── sections/
│   ├── Hero.jsx              # Hero with typewriter effect
│   ├── About.jsx             # Bio & profile photo
│   ├── Skills.jsx            # Categorized skill bars
│   ├── Projects.jsx          # Project cards grid
│   ├── Experience.jsx        # Vertical timeline
│   ├── Testimonials.jsx      # GitHub stats & quotes
│   └── Contact.jsx           # Contact form & social links
```

## 🎨 Design System

| Token           | Value                        |
|-----------------|------------------------------|
| Background      | `#0a0a0f`                    |
| Surface         | `#111118`                    |
| Primary Accent  | `#00ff88` (electric green)   |
| Secondary Accent| `#6366f1` (indigo)           |
| Text Primary    | `#f1f5f9`                    |
| Text Muted      | `#64748b`                    |
| Heading Font    | JetBrains Mono               |
| Body Font       | DM Sans                      |

## 🌐 Deployment

This project is configured for zero-config deployment:

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📝 Customization

- **Personal info**: Edit placeholder text in each section component
- **Colors**: Modify the `@theme` block in `src/index.css`
- **Projects**: Update the `projects` array in `src/sections/Projects.jsx`
- **Experience**: Update the `experiences` array in `src/sections/Experience.jsx`
- **Social links**: Edit the `socialLinks` array in `src/sections/Contact.jsx`

## 📄 License

MIT
