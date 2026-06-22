SRK Infra Dev Website

A multi-page real estate application built using modern web technologies to showcase luxury housing projects, villas, and open plots layouts.

---

## 🚀 Features

- **Home Page** - Core landing showcase view.
- **About Us Page** - Corporate history & profile.
- **Projects Page** - Master portfolio layout.
- **Villas Page** - Gated villa assets & brochure leads.
- **Plots Page** - Open plots details & location highlights.
- **Apartments Page** - Coming soon pipeline presentation.
- **Careers Page** - Recruitment intake options.
- **Contact Page** - Sales office address & general contact intake.
- **WhatsApp Button** - Floating interactive contact button for instant customer service.
- **Form Validation** - Two-step user details intake and OTP generation system.
- **Google Maps Integration** - Core location coordinates linked via embedded maps.

---

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **React Router DOM**
- **Tailwind CSS**
- **React Icons**
- **Supabase** (Database engine for lead generation storage)
- **EmailJS** (Automated transmission service for verification codes)

---

## 📁 Folder Structure

```text
src/
 ├── components/       # Reusable layout components (Navbar, Footer, WhatsAppButton)
 ├── pages/            # View layouts (Plots.jsx, Apartments.jsx, etc.)
 ├── assets/           # Global styles and static vectors
 ├── supabaseClient.js # Configuration file initializing the database client
 ├── App.jsx           # Main routing engine config
 └── main.jsx          # App entry point
public/
 └── images/           # Application images and production renders

🖼️ Image Placement
Store all project images inside the public directory exactly as shown:

public/images/
Examples:
public/images/logo.png
public/images/hero1.jpg
public/images/hero2.jpg

⚙️ Configuration & Environment Setup
This project uses Environment Variables to securely connect to backend database services without exposing private credentials inside the GitHub code repository.

Before running the application, create a file named .env in your project root directory and populate it with your project tokens:

Code snippet
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key_here

⚠️ Security Note: The .env file is explicitly listed inside your .gitignore configuration and will never be tracked or uploaded to your public GitHub ecosystem.

🛠️ Installation & Local Development
Follow these steps to spin up your local environment:
Open your system terminal or code editor console.

Navigate directly into the project directory folder:
cd srk_infra_2

Install the required dependency packages:
npm install

Start the Vite development server:
npm run dev

Open your local browser to access the live app interface:
http://localhost:5173


🗺️ Application Map (Routes)
The system switches between sections seamlessly using these exact structural paths:
/
/about
/projects
/villas
/plots
/apartments
/blog
/careers
/contact

🛠️ Troubleshooting & Common Fixes:

-> Missing package.json Errors: Double-check that your terminal directory path is explicitly pointing inside the srk_infra_2 root directory block before trying to run installation loops.
-> Vite Missing Module Exports: If icon bundles or submodules fail to compile correctly, verify that you are explicitly pulling from supported, bundled icon subsets (such as react-icons/md or react-icons/fa).
-> ESLint Unused Imports: If code checkers warn about unused structures, either attach them inside your active routes layout or drop the unused statement entirely.
-> Stop Server Connection: To completely shut down the active terminal dev environment running your project interface, type CTRL + C inside your terminal window.