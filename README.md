# Personal Portfolio Website

A modern and responsive **Full Stack Developer Portfolio** built with **React.js**, featuring smooth animations using **GSAP**, a functional contact form powered by **Formspree**, and links to live projects and source code.

## Live Website

🌐 **Portfolio:** [Add your portfolio URL here]

## Features

* Responsive design for desktop, tablet, and mobile
* Modern and clean UI
* Smooth scroll animations
* GSAP-powered animations
* Interactive navigation
* About Me section
* Skills and technologies section
* Projects showcase
* Live project and GitHub links
* Contact form
* Formspree integration for receiving messages
* Reusable React components
* Optimized project structure

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Scroll

### Animation

* GSAP
* `@gsap/react`
* ScrollTrigger

### Contact Form

* Formspree

### Tools

* Vite
* Git
* GitHub
* VS Code
* npm

## Project Structure

```text
portfolio/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## GSAP Animations

The portfolio uses **GSAP** to create smooth and interactive animations.

Examples include:

* Navbar animations
* Hero section animations
* Text animations
* Project card animations
* Scroll-based animations
* Mobile menu animations
* Section reveal animations

Example:

```javascript
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  gsap.from(".project-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top 80%",
    },
  });
});
```

## Contact Form

The contact form uses **Formspree**, allowing visitors to send messages directly without requiring a custom backend email service.

Example:

```jsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message"
    required
  />

  <button type="submit">
    Send Message
  </button>
</form>
```

Replace:

```text
YOUR_FORM_ID
```

with the Formspree form ID associated with your account.

## Projects

The portfolio showcases my development projects with links to both the deployed application and source code.

Each project can include:

* Project description
* Technologies used
* Key features
* GitHub repository
* Live demo

Example:

```jsx
<a
  href="https://your-live-project-url.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Live Demo
</a>

<a
  href="https://github.com/yourusername/project-name"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
```

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

Navigate to the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available on the local development server shown by Vite.

## Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

If the project uses environment variables, create a `.env` file:

```env
VITE_FORMSPREE_ID=your_form_id
```

Then access it in React using:

```javascript
const formId = import.meta.env.VITE_FORMSPREE_ID;
```

> Never commit sensitive environment variables or secret keys to GitHub.

## Deployment

The portfolio can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

For production deployment, create the production build using:

```bash
npm run build
```

and deploy the generated `dist` folder using your preferred hosting platform.

## Responsive Design

The website is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries and responsive layouts are used to provide a consistent experience across devices.

## Sections

### Home

Introduction and professional headline with animated elements and navigation to important sections.

### About

A brief introduction, professional experience, and development background.

### Skills

Technologies and tools used for full-stack development.

### Projects

A collection of development projects with:

* Project overview
* Technology stack
* GitHub repository
* Live application

### Contact

Visitors can contact me through the Formspree-powered contact form.

## Author

**Priti Maurya**

Full Stack Developer | MERN | Node.js | Express.js | MongoDB | React.js | PHP | MySQL

### Connect With Me

* LinkedIn: [Add LinkedIn URL]
* GitHub: [Add GitHub URL]
* Portfolio: [Add Portfolio URL]

## License

This project is created for personal portfolio and professional showcase purposes.
