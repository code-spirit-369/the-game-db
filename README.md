<div align="center">
  <br />
    <a href="https://youtube.com/playlist?list=PLJT1e2CqMCFC67EzS0-E7FpDs96-OJruw&si=0VZr5vovOLl95okI" target="_blank">
      <img src="public/tgdb_header.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
  </div>

  <h3 align="center">The Game Database</h3>

<div align="center">
     Build this project step by step with a detailed tutorial on <a href="https://www.youtube.com/@codespirit369/videos" target="_blank"><b>Code Spirit</b></a> YouTube. 
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🎬 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@codespirit369/videos" target="_blank"><b>Code Spirit</b></a>.

<a href="https://youtube.com/playlist?list=PLJT1e2CqMCFC67EzS0-E7FpDs96-OJruw&si=0VZr5vovOLl95okI" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Next.js
- Typescript
- TailwindCSS
- RAWG API
- ShadCN

## <a name="introduction">🎬 Introduction</a>

Welcome to The Game Database app! This web application allows you to discover games by genre with detailed information fetched from the RAWG API. It features a sleek and responsive design, including a dark/light mode toggler for an optimal user experience across devices.

## <a name="features">🔋 Features</a>

👉 **Game Search by Genre**: Find and explore games based on your favorite genres.

👉 **Dark/Light Theme Mode**: Toggle between dark and light themes for a comfortable viewing experience.

👉 **Responsive Design**: Ensures a seamless experience on all devices, whether desktop, tablet, or mobile.

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/code-spirit-369/the-game-db.git
cd the-game-db
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
RAWG_API_KEY=
```

Get your API key from [RAWG](https://rawg.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Code Snippets</a>

<details>
<summary><code>/types.ts</code></summary>

```typescript
interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: Platform[];
  genres: Genre[];
}
```

</details>

## <a name="links">🔗 Assets</a>

Public assets used in the project can be found [here](https://drive.google.com/file/d/1etCa7Aidnv0GGrkwscWoz_rlhGr82l4w/view?usp=sharing)
