**Objective:** Generate the complete Sprint 1 Frontend Deliverable.

---

**Prompt used to generate this project:**

Act as a Frontend Developer. Build a corporate IT landing page for a company named 'Prodesk IT'. 

**Core Rules & Tech Stack:**
1. Strictly use ONLY Pure HTML5, CSS3, and Vanilla JavaScript. 
2. Do NOT use any frameworks like Bootstrap, Tailwind, or external JS libraries.
3. The code must be production-ready, clean, and modular.

**Design & Architecture:**
1. Layout: Use CSS Grid for the card sections (About and Services) and Flexbox for the navbar and general alignment.
2. Responsiveness: The design must be 100% mobile-responsive using a mobile-first approach.
3. Glassmorphism: Apply a frosted glass effect (backdrop-filter: blur) to the sticky Navbar.
4. Theming: Use CSS Custom Properties (:root) to define a Light Mode and a Dark Mode theme.
5. Hover Effects: Add a 3D lifting effect (transform: translateY) and shadow drop on hover for the Service cards.

**Required Features (JavaScript):**
1. Dark/Light Mode: A working toggle button. The user's preference must be saved in localStorage.
2. Scroll Spy: The navbar links must automatically highlight (become active) as the user scrolls. Ensure the logic explicitly checks if the user is at the bottom of the page to highlight the 'Contact' section correctly.
3. Mobile Menu: A fully functional Hamburger menu for mobile screens.

**Exact Content & Structure Required:**
1. Header: Include a modern, Pure SVG 3D tech-stack logo with a linear gradient (blue to cyan), navigation links (Home, About, Services, Contact), and control icons.
2. Hero Section: 
   - A badge: "Next-Gen Digital Marketing & Engineering".
   - High-converting headline: "Empowering Businesses With [Scalable Digital Architecture]" (make bracketed text gradient).
   - Subtitle: "Prodesk IT delivers pixel-perfect web development..."
   - Two CTA Buttons: "Get Started" (Primary, links to #contact) and "Learn More" (Secondary, links to #services). Add ambient background glow orbs.
3. About Us: A 3-column grid highlighting 'High Velocity', 'Pixel Perfection', and 'Conversion Focused'.
4. Services: 3 cards for 'Search Engine Optimization (SEO)', 'Web Development & Architecture' (make this one highlighted with a 'Popular' badge), and 'Performance Marketing'. All cards must link to #contact.
5. Contact Section: A clean lead-generation form asking for a business email and a 'Request Consultation' submit button.
6. Footer: Include the SVG Logo, tagline, copyright text appended exactly with ' | +911234567899', and 3 social icons (LinkedIn, GitHub, Twitter).

**QA & Performance:**
1. SEO: Include 100% optimized Meta Tags (Description, Keywords, Author) in the head section.
2. Accessibility (a11y): Strictly use Semantic HTML tags (header, main, section, article) and include aria-label attributes on all interactive buttons.

Please output the complete, bug-free code divided clearly into index.html, style.css, and script.js.