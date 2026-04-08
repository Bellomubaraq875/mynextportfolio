# 🌌 Mubarak Adeyemi | Modern Portfolio

A high-performance, visually refined portfolio built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**. This project features a "nebula-dark" aesthetic, utilizing glassmorphism, dynamic lighting, and interactive physics-based components.

-----

## ✨ Key Features

  * **Dynamic Torch System:** Interactive cursor-tracking radial gradients that illuminate sections as you browse.
  * **Physics-Based Skill Bubbles:** A unique, floating skills cloud with brand-colored glowing hover states and proficiency metrics.
  * **Architectural About Section:** Layered "nebula" background blobs with structural grid lines and capability cards.
  * **Sleek Project Showcase:** 3D-tilt effects on project cards with squircle-shaped interactive buttons and detailed case-study drawers.
  * **Advanced Contact Engine:** Integrated with **Formspree React SDK**, featuring custom success/loading animations and validation.
  * **Fluid Navigation:** A floating "Island" header that transitions from transparent to glassmorphic on scroll.

-----

## 🛠️ Tech Stack

### Frontend

  * **Framework:** Next.js 14 (App Router)
  * **Styling:** Tailwind CSS (Glassmorphism & Custom Animations)
  * **Animations:** Framer Motion (AnimatePresence, Motion Divs)
  * **Icons:** Lucide React & React Icons (Simple Icons set)

### Integration & Performance

  * **Forms:** Formspree SDK
  * **Fonts:** Jost (Google Fonts)
  * **Performance:** Image Optimization via `next/image`, Lazy Loading, and Code Splitting.

-----

## 🚀 Getting Started

### Prerequisites

  * Node.js 18.x or later
  * npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Bellomubaraq875/mynextportfolio.git
    cd mynextportfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory for your Formspree ID:

    ```env
    NEXT_PUBLIC_FORMSPREE_ID=xrbgbjlq
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the result.

-----

## 📂 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   ├── section/      # Hero, About, Projects, Skills, Contact
│   │   └── ui/           # MagneticButton, Reusable UI
│   ├── providers.tsx     # Client-side context wrappers
│   └── layout.tsx        # Root layout & Metadata
├── public/
│   ├── images/           # Project screenshots & Techspace assets
│   └── logo/             # Favicon & Brand marks
```

-----

## 👤 Author

**Bello Mubarack Adeyemi**

  * **Role:** Frontend Engineer (4+ Years Experience)
  * **Location:** Ibadan, Nigeria
  * **LinkedIn:** [linkedin.com/in/mubarak-bello-213b8110b](https://www.google.com/search?q=https://linkedin.com/in/mubarak-bello-213b8110b)
  * **GitHub:** [@Bellomubaraq875](https://github.com/Bellomubaraq875)

-----

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.