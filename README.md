<div align="center">

# 🎬 QuickShow
### Next-Gen Movie Ticket Booking Platform

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-quickshow--book--lilac.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://quickshow-book-lilac.vercel.app/)

<p align="center">
  <a href="https://quickshow-book-lilac.vercel.app/"><strong>Explore the Live Application »</strong></a>
</p>

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com/)
[![React Router](https://img.shields.io/badge/Router-v7.12-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel&logoColor=white)](https://quickshow-book-lilac.vercel.app/)

A modern, high-performance, and visually captivating **pure frontend** movie ticket booking application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Clerk Authentication**. 

Featuring an immersive cinematic dark UI, interactive cinema seat selection, YouTube trailer previews, and an integrated admin management portal — completely self-contained with mock datasets and client-side state.

</div>

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
  - [Customer Experience](#-customer-experience)
  - [Admin Management Portal](#-admin-management-portal)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#1-clone--navigate)
  - [Environment Configuration](#3-environment-configuration)
- [Available Scripts](#-available-scripts)
- [Application Routes](#-application-routes)
- [Authentication Setup (Clerk)](#-authentication-setup-clerk)
- [Deployment (Vercel)](#-deployment-vercel)
- [License](#-license)

---

## 🚀 Live Demo

Experience the live app deployed on Vercel:
👉 **[https://quickshow-book-lilac.vercel.app/](https://quickshow-book-lilac.vercel.app/)**

---

## ✨ Key Features

### 👤 Customer Experience
- **Cinematic Dark Design**: Built with a sleek dark aesthetic (`#09090B`), custom ambient blur orbs (`BlurCircle`), smooth transitions, and typography powered by Google Fonts (Outfit).
- **Hero & Trending Showcase**: Dynamic banner showcasing featured releases, IMDb ratings, genres, and direct booking actions.
- **YouTube Trailer Player**: Watch high-definition movie trailers in an embedded responsive player with preview thumbnails.
- **Movie Details Page**: In-depth film overview, genre tags, vote counters (formatted with `kConverter`), runtimes, and cast roster.
- **Interactive Cinema Seat Grid**:
  - Live 10-row cinema seating plan (Rows A–J) arranged in standard theater groups.
  - Perspective screen indicator (**Screen Side**).
  - Multi-seat reservation with a 5-seat selection limit.
  - Interactive show date and time slot selector.
- **Order History (`/my-bookings`)**: Real-time review of reserved tickets, showtimes, seats allocated, and payment badges.
- **Favourites (`/favourite`)**: Quick-access collection of saved movies.
- **Clerk Cloud Authentication**: Seamless modal login, registration, and user profile management.
- **Interactive Toast Alerts**: Validation messages powered by `react-hot-toast` (alerts for missing showtimes or exceeding seat limits).

### 🛡️ Admin Management Portal (`/admin`)
- **Dashboard Analytics**: Real-time metrics tracking:
  - Total Bookings
  - Total Revenue
  - Active Shows
  - Registered Users
- **Add Shows (`/admin/add-shows`)**: Select movies, configure multiple screening dates/times, and set ticket pricing.
- **List Shows (`/admin/list-shows`)**: Monitor all scheduled movie screenings with detailed slot breakdowns.
- **List Bookings (`/admin/list-bookings`)**: Comprehensive registry of user reservations, seat numbers, and invoice statuses.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI rendering engine |
| **[Vite 7](https://vitejs.dev/)** | Fast development server and production bundler |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Modern utility-first styling with native CSS imports |
| **[@clerk/clerk-react](https://clerk.com/)** | Complete client-side authentication & user sessions |
| **[React Router DOM v7](https://reactrouter.com/)** | Client-side routing with nested admin routes |
| **[Lucide React](https://lucide.dev/)** | Modern, customizable UI iconography |
| **[React Hot Toast](https://react-hot-toast.com/)** | Lightweight, animated toast notifications |
| **[React Player](https://github.com/cookpete/react-player)** | Embedded video player integration |

---

## 📁 Project Architecture

```text
client/
├── public/                     # Static assets and favicons
├── src/
│   ├── assets/                 # SVGs, icons, dummy data, and image assets
│   │   ├── assets.js           # Mock datasets (shows, trailers, bookings, dashboard stats)
│   │   └── ...                 # Logos and visual illustrations
│   ├── components/             # Reusable UI components
│   │   ├── admin/              # Admin layout components (Navbar, Sidebar, Title)
│   │   │   ├── AdminNavbar.jsx
│   │   │   ├── AdminSidebar.jsx
│   │   │   └── Title.jsx
│   │   ├── BlurCircle.jsx      # Ambient glowing background effects
│   │   ├── DateSelect.jsx      # Date selection component
│   │   ├── FeaturedSection.jsx # Featured movies carousel/grid
│   │   ├── Footer.jsx          # App footer
│   │   ├── HeroSection.jsx     # Homepage hero banner
│   │   ├── Loading.jsx         # Loading spinner
│   │   ├── MovieCard.jsx       # Individual movie preview card
│   │   ├── Navbar.jsx          # Header navigation with mobile drawer & Clerk
│   │   └── TrailerSection.jsx  # Video trailer preview section
│   ├── lib/                    # Helper utility functions
│   │   ├── dateFormat.js       # Date formatting utilities
│   │   ├── isoTimeFormat.js    # ISO time parsing
│   │   ├── kconverter.js       # Number / vote counter formatter (e.g., 12.5k)
│   │   └── timeFormat.js       # Runtime conversion (minutes to hrs/mins)
│   ├── pages/                  # Application views
│   │   ├── admim/              # Admin management views (Dashboard, AddShow, ListShow, ListBookings)
│   │   │   ├── AddShow.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── ListBookings.jsx
│   │   │   └── ListShow.jsx
│   │   ├── Favourite.jsx       # Saved movies list
│   │   ├── Home.jsx            # Landing page
│   │   ├── MovieDetails.jsx    # Movie details & showtime selector
│   │   ├── Movies.jsx          # All movies catalogue
│   │   ├── MyBookings.jsx      # User's ticket reservations
│   │   └── SeatLayout.jsx      # Interactive seat grid & checkout
│   ├── App.jsx                 # Routing configuration & global toaster
│   ├── index.css               # Design system tokens, font imports & global styles
│   └── main.jsx                # Application root with Clerk & Router providers
├── .env.example                # Template for environment variables
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Tailwind configuration
└── vite.config.js              # Vite build setup
```

---

## 🚦 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**, **yarn**, or **pnpm**

### 1. Clone & Navigate
```bash
git clone https://github.com/khantauheed77/Movie_Ticket_Booking.git
cd Movie_Ticket_Booking/client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root of the `client` directory by copying the `.env.example` file:

```bash
cp .env.example .env
```

Set your configuration values inside `.env`:

```env
# Clerk Publishable Key (from https://dashboard.clerk.com/)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here

# Currency Symbol for pricing (defaults to ₹)
VITE_CURRENCY=₹
```

### 4. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR |
| `npm run build` | Builds the app for production to the `dist/` folder |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Runs ESLint to check for code quality and syntax errors |

---

## 🗺️ Application Routes

### Public & User Routes
| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Hero banner, trending movies, and trailer showcase |
| `/movies` | `Movies` | Full catalogue of now-showing titles |
| `/movies/:id` | `MovieDetails` | Detailed movie info, trailer, and date selector |
| `/booking/:id/:date` | `SeatLayout` | Select showtime, pick seats (up to 5), and proceed |
| `/my-bookings` | `MyBookings` | View booked tickets, seat numbers, and invoice status |
| `/favourite` | `Favourite` | View favourite / bookmarked movies |

### Admin Routes (`/admin/*`)
| Route | Component | Description |
| :--- | :--- | :--- |
| `/admin` | `Dashboard` | High-level metrics: revenue, bookings, active shows, users |
| `/admin/add-shows` | `AddShow` | Schedule screenings with dates, times, and prices |
| `/admin/list-shows` | `ListShow` | View and manage scheduled movie screenings |
| `/admin/list-bookings` | `ListBookings` | View all customer bookings and payments |

---

## 🔐 Authentication Setup (Clerk)

Authentication works 100% on the frontend without requiring your own backend:

1. Create a free account at [Clerk Dashboard](https://dashboard.clerk.com/).
2. Click **Create application** and choose your preferred sign-in options (Email, Google, etc.).
3. Copy your **Publishable Key** from the **API Keys** tab.
4. Add it to your `.env` file:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
   ```

---

## 🌐 Deployment (Vercel)

This application is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Sign in to Vercel and click **Add New > Project**.
3. Import your repository and set the **Root Directory** to `client`.
4. Under **Environment Variables**, add:
   - `VITE_CLERK_PUBLISHABLE_KEY` = your publishable key
   - `VITE_CURRENCY` = `₹`
5. Click **Deploy**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/khantauheed77">Tauheed Khan</a></sub>
</div>
