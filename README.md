# Portfolio Website - Shivam Sidharth

A personal portfolio website built with **HTML**, **CSS**, and **JavaScript** to showcase skills, services, projects, and contact information. The site features a modern dark-themed design with cyan (#0ef) accent colors, smooth animations, and interactive elements.

---

## Table of Contents

- [Live Preview](#live-preview)
- [Features](#features)
- [Sections](#sections)
  - [Home](#1-home)
  - [About Me](#2-about-me)
  - [My Services](#3-my-services)
  - [My Skills](#4-my-skills)
  - [Latest Projects](#5-latest-projects)
  - [Contact Me](#6-contact-me)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [External Libraries](#external-libraries)
- [Animations & Interactions](#animations--interactions)
- [Contact Information](#contact-information)
- [License](#license)

---

## Features

- Fully responsive, single-page portfolio layout
- Dark-themed UI with cyan (#0ef) accent colors and glowing effects
- Animated progress bars for technical skills (HTML, CSS, JavaScript, Python, React)
- Circular/radial SVG progress indicators for professional skills (Creativity, Problem Solving, Communication, Team Work)
- Typed.js auto-typing animation for roles (Web Developer, Programmer, Researcher)
- Expandable "Learn More" section for Web Development services
- Interactive contact form with client-side validation and simulated submission
- Smooth scrolling navigation between all sections
- Hover effects on project cards with overlay details
- Social media links to LinkedIn and GitHub with external tab navigation

---

## Sections

### 1. Home

The hero/landing section features:
- A greeting with the name **Shivam Sidharth**
- Auto-typing text cycling through "Web Developer", "Programmer", and "Researcher" using Typed.js
- A brief introduction paragraph
- Social media icons (LinkedIn, GitHub, Discord, WhatsApp) with hover glow effects
- A "More About Me" button that smooth-scrolls to the About section
- Background image (`photo.jpg`) positioned on the right

### 2. About Me

A two-column grid layout with:
- A profile photo on the left
- Detailed biography on the right describing expertise in Full Stack Development and Cybersecurity Research
- Mentions of technologies: JavaScript frameworks, TypeScript, Node.js, React
- Research focus on Network Intrusion Detection Systems (NIDS) using deep learning (Autoencoders, NetBERT)
- A "Get In Touch" button linking to the Contact section

### 3. My Services

Showcases professional services in a card-based grid:
- **Web Development** card with:
  - Summary paragraph about building responsive, high-performance websites
  - An expandable "Learn More" section listing 7 detailed service offerings
  - Toggle functionality (Learn More / Show Less) powered by JavaScript

### 4. My Skills

Displayed side-by-side in a flexbox layout:

**Technical Skills** (left column) - Animated horizontal progress bars:
| Skill      | Proficiency |
|------------|-------------|
| HTML       | 90%         |
| CSS        | 60%         |
| JavaScript | 85%         |
| Python     | 50%         |
| React      | 75%         |

**Professional Skills** (right column) - Circular SVG progress indicators in a 2x2 grid:
| Skill           | Proficiency |
|-----------------|-------------|
| Creativity      | 90%         |
| Problem Solving | 80%         |
| Communication   | 75%         |
| Team Work       | 90%         |

### 5. Latest Projects

A grid-based portfolio section featuring project cards with hover overlay effects:

- **Wealthome** - A wealth management platform for tracking investments and portfolios
- **AI Image Generation** - An AI-powered application for generating images from text prompts

Each card displays a project image, title, description, and an external link icon on hover.

### 6. Contact Me

A two-column layout with:

**Left column - Contact Info:**
- Email: sidharthshivam7@gmail.com (clickable mailto link)
- Phone: +91 6206384662 (clickable tel link)
- LinkedIn icon linking to the profile

**Right column - Contact Form:**
- Name, Email, Subject, and Message fields
- Styled "Send Message" button with send icon and hover animation
- Client-side form validation:
  - Name field required
  - Email field with regex validation
  - Message field required
- Visual feedback: loading state ("Sending..."), success/error messages
- Simulated form submission with 1.5s delay

---

## Tech Stack

| Technology  | Purpose                                      |
|-------------|----------------------------------------------|
| HTML5       | Page structure and semantic markup            |
| CSS3        | Styling, animations, keyframes, grid, flexbox |
| JavaScript  | Interactivity, form handling, smooth scroll   |
| Typed.js    | Auto-typing text animation in hero section    |
| Boxicons    | Icon library for social, skill, and UI icons  |

---

## Project Structure

```
Portfolio-Website/
├── index.html              # Main HTML file with all sections
├── stylesheet.css          # All styles, animations, and responsive rules
├── main.js                 # JavaScript for typing animation, form handling,
│                           #   toggle details, and smooth scrolling
├── photo.jpg               # Profile/background photo
├── images/
│   ├── wealthome.jpg       # Project screenshot for Wealthome
│   └── ai-image-gen.jpg    # Project screenshot for AI Image Generation
└── README.md               # This file
```

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivamsid-47/Portfolio-Website.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Portfolio-Website
   ```

3. **Open in browser:**
   Simply open `index.html` in any modern web browser. No build tools or server required.

   ```bash
   # On macOS
   open index.html

   # On Linux
   xdg-open index.html

   # On Windows
   start index.html
   ```

4. **Or use a local server** (optional, for development):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .
   ```
   Then visit `http://localhost:8000` in your browser.

---

## External Libraries

The project loads the following libraries via CDN (no installation needed):

- **[Typed.js v2.0.15](https://github.com/mattboldt/typed.js/)** - Auto-typing text animation
  ```
  https://unpkg.com/typed.js@2.0.15/dist/typed.umd.js
  ```

- **[Boxicons v2.1.4](https://boxicons.com/)** - Icon library
  ```
  https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css
  ```

---

## Animations & Interactions

| Animation/Interaction       | Description                                                     |
|-----------------------------|-----------------------------------------------------------------|
| `slideRight`                | Logo slides in from the left on page load                       |
| `slideTop`                  | Navbar links and buttons animate upward on load                 |
| `slideBottom`               | Greeting text slides down on load                               |
| `slideLeft`                 | Social icons and paragraph animate from the right               |
| `animate`                   | Technical skill progress bars scale from left to full width     |
| `animate-path1` to `path4`  | SVG circular paths animate from 0 to their target offset        |
| `showText`                  | Skill percentages and labels fade in after bar animations       |
| Hover: `.row`               | Project card images scale up, overlay slides up from bottom     |
| Hover: `.services-list div` | Service cards translate upward by 10px                          |
| Hover: `.send`              | Submit button glows with layered cyan box-shadows, shifts up    |
| Toggle: `toggleDetails()`   | Web Development details expand/collapse with max-height + opacity |
| Form submit                 | Validates fields, shows loading state, then success/error message |

---

## Contact Information

- **Name:** Shivam Sidharth
- **Email:** [sidharthshivam7@gmail.com](mailto:sidharthshivam7@gmail.com)
- **Phone:** [+91 6206384662](tel:+916206384662)
- **LinkedIn:** [linkedin.com/in/shivam-siddharth-535290261](https://www.linkedin.com/in/shivam-siddharth-535290261/)
- **GitHub:** [github.com/shivamsid-47](https://github.com/shivamsid-47)

---

## License

This project is open source and available for personal and educational use.
