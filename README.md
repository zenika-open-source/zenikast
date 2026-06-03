# 🎙️ Zenikast

> The Zenika Podcast & Content Management Platform (V2)

Zenikast is a modern web application designed for Zenika Nantes to manage and showcase its podcast episodes, talks, and community events. This platform serves as both a public-facing website for listeners and a content management system for speakers and organizers.

## ✨ Features

- **Episode Management**: Browse and listen to Saison 1 and Saison 2 episodes.
- **Modern UI**: Built with a "Zenika-first" design language, supporting dark/light modes and smooth animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Platform Integration**: Links to YouTube, Spotify, Deezer, and Apple Podcasts.

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [TailwindCSS 3](https://tailwindcss.com/) + [Shadcn/UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) + [Three.js](https://threejs.org/)
- **State Management**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Routing**: [React Router 6](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zenika-open-source/zenikast.git
   cd zenikast
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

- `src/components`: Reusable UI components and layout elements.
- `src/pages`: Application pages (Index, Episodes, About).
- `src/lib`: Utility functions, constants, and shared logic.
- `src/hooks`: Custom React hooks.
- `public`: Static assets (images, icons, etc.).


Made with ❤️ by Zenika
