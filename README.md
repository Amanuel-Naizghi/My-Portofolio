# Amanuel Tesfatsion — Developer Portfolio

**[View the live portfolio](https://my-portofolio-psi-azure.vercel.app/)**

My personal portfolio showcasing my work as a full stack developer, the technologies I use, my education, and my professional background. Built with React and Tailwind CSS, it uses a mobile-first layout with light and dark themes and subtle animations.

## Features

- Responsive layouts for mobile, tablet, and desktop.
- Shared navigation with a coder-themed mobile menu.
- Full stack developer introduction and downloadable resume.
- Featured real-time Messaging App with its technology stack, deployment details, and live demo.
- Project cards with screenshots, technology badges, source links, and live demos.
- Skills grouped into frontend, backend, databases, and cloud deployment, with technology icons.
- Education and concise work experience, including software development and accounting backgrounds.
- AWS Certified Cloud Practitioner credential with a Credly verification link.
- Contact form powered by EmailJS, with sending, success, and error feedback.
- Shared footer with navigation links.
- Hover effects and entrance animations that respect reduced motion preferences.

## Tech Stack

| Purpose | Technologies |
| --- | --- |
| User interface | React 19, JavaScript, JSX |
| Styling and animation | Tailwind CSS 3, CSS |
| Build and development | Vite 6 |
| Routing | React Router |
| Icons | React Icons |
| Contact email delivery | EmailJS |
| Code checks | ESLint |

The portfolio itself is a frontend application. The featured Messaging App is a separate full stack project built with React, Node.js, Express, Socket.IO, Prisma, and PostgreSQL, with infrastructure on AWS.

## Run Locally

Install Node.js and npm, then run these commands from the project directory:

```bash
npm install
npm run dev
```

Open the local address printed by Vite in your terminal.

On Windows PowerShell, if script execution policy blocks `npm`, use `npm.cmd` instead:

```powershell
npm.cmd install
npm.cmd run dev
```

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with live updates |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
public/
  AMANUEL-TESFATSION.pdf   Resume
src/
  assets/                 Project screenshots, logos, and images
  components/
    ThemeContext.jsx      Shared light/dark theme state
    header.jsx            Desktop and mobile navigation
    home.jsx              Introduction and homepage sections
    projects.jsx          Featured project and project cards
    experience.jsx        Technology skills and certification
    about.jsx             Education, work experience, and interests
    contact.jsx           Contact form and social links
    footer.jsx            Shared footer
  data/
    projects.js           Project descriptions, stacks, and links
    skills.js             Skill groups and technology icons
  App.jsx                 Routes and shared header/footer
  main.jsx                React entry point
  index.css               Tailwind directives and shared scrolling rules
tailwind.config.js        Theme settings and animation definitions
```

## Update Content

- **Projects:** edit `src/data/projects.js`. The featured Messaging App content is in `src/components/projects.jsx`.
- **Skills:** edit `src/data/skills.js`.
- **Education and work:** edit `src/components/about.jsx`.
- **Introduction and social links:** edit the relevant components in `src/components/`.
- **Resume:** replace `public/AMANUEL-TESFATSION.pdf` while keeping its filename, or update the resume link in `home.jsx`.
- **Animations:** edit the keyframes and timing in `tailwind.config.js`. Components apply them through Tailwind utility classes.

## Contact Form Setup

The contact form uses the browser-side EmailJS SDK. Its service ID, template ID, and public key are configured in `src/components/contact.jsx`.

For delivery to work:

1. Connect an email service in your EmailJS account.
2. Set the template's recipient to your receiving email address.
3. Match the template variables to the form fields: `name`, `email`, and `message`.
4. Configure the service ID, template ID, and public key in the component.
5. Submit a test message and confirm it arrives.

The form shows success only after EmailJS accepts the request. On failure, it preserves the typed message. EmailJS service connections must remain authorized for delivery to continue working. Use only the EmailJS public key in frontend code; email passwords and private keys do not belong in the repository.

## Production Build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. Configure your host to serve `index.html` for client-side routes such as `/about`, `/projects`, `/experience`, and `/contact`.

## Connect

- [GitHub](https://github.com/Amanuel-Naizghi)
- [LinkedIn](https://www.linkedin.com/in/amanuel-tesfatsion)
- [AWS certification on Credly](https://www.credly.com/badges/fc6ecbcd-dd5d-402b-8210-67fa54e4d134/linked_in_profile)
