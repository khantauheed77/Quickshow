# 🎬 QuickShow - Movie Ticket Booking Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-quickshow--book--lilac.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://quickshow-book-lilac.vercel.app/)

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com/)
[![React Router](https://img.shields.io/badge/Router-v7.12-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel&logoColor=white)](https://quickshow-book-lilac.vercel.app/)

A sleek, responsive, and feature-packed **pure frontend** movie ticket booking application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Clerk Authentication**. 

It features an immersive cinematic dark interface, interactive seat reservation grid, YouTube trailer previews, and an admin management portal — completely self-contained with client-side state and mock datasets (no custom backend required).

🔗 **Live Deployment:** [https://quickshow-book-lilac.vercel.app/](https://quickshow-book-lilac.vercel.app/)

---

## 🌟 Features

### 👤 Customer Experience
- **Cinematic Dark Theme**: Sleek, high-contrast dark aesthetic (`#09090B`) with glowing ambient blur accents and responsive Outfit typography.
- **Hero & Featured Shows**: Dynamic showcase of trending movies, ratings, genres, and instant booking shortcuts.
- **Trailer Showcase**: Embedded responsive YouTube trailer player with quick video selection thumbnails.
- **Movie Details**: Full overview, runtime, release year, IMDb/audience score ratings, genre tags, and cast members.
- **Interactive Seat Selection**:
  - Live 10-row cinema seating grid (rows A–J) with grouped aisle layouts.
  - Visual cinema screen perspective indicator.
  - Multi-seat selection (up to 5 tickets) with real-time selection validation.
  - Date and showtime selector.
- **My Bookings (`/my-bookings`)**: Order overview displaying booked seats, movie details, booking date, amount, and invoice status.
- **Favourites (`/favourite`)**: Quick-access view to explore bookmarked titles.
- **Clerk Authentication**: Frontend-first authentication for secure sign-up, sign-in modals, Google/OAuth, and profile management.
- **Instant Alerts**: User validation alerts powered by React Hot Toast (e.g. seat limits and missing timing/date prompts).

### 🛡️ Admin Management Portal (`/admin`)
- **Dashboard Overview**: Key business analytics cards:
  - Total Bookings
  - Total Revenue
  - Active Shows
  - Total Users
- **Add Shows (`/admin/add-shows`)**: Schedule screenings with custom dates, time slots, and ticket pricing.
- **List Shows (`/admin/list-shows`)**: View and inspect all active scheduled screenings.
- **List Bookings (`/admin/list-bookings`)**: Comprehensive log of customer bookings, seat allocations, and payment states.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library |
| **[Vite 7](https://vitejs.dev/)** | High-performance frontend build tooling and dev server |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Modern utility-first styling with native CSS imports |
| **[@clerk/clerk-react](https://clerk.com/)** | Client-side user authentication and account management |
| **[React Router DOM v7](https://reactrouter.com/)** | Client-side routing and nested admin layouts |
| **[Lucide React](https://lucide.dev/)** | Clean, customizable modern iconography |
| **[React Hot Toast](https://react-hot-toast.com/)** | Modern animated toasts for user validations |
| **[React Player](https://github.com/cookpete/react-player)** | Video playback integration |

---

## 📁 Project Structure

```text
client/
├── public/                     # Static assets and favicon
├── src/
│   ├── assets/                 # SVGs, icons, dummy data, and image assets
│   │   ├── assets.js           # Mock datasets (shows, trailers, bookings, dashboard stats)
│   │   └── ...                 # Logos and visual illustrations
│   ├── components/             # Reusable UI components
│   │   ├── admin/              # Admin dashboard layout components
│   │   │   ├── AdminNavbar.jsx
│   │   │   ├── AdminSidebar.jsx
│   │   │   └── Title.jsx
│   │   ├── BlurCircle.jsx      # Ambient glowing background effects
│   │   ├── DateSelect.jsx      # Show date picker component
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
│   │   ├── kconverter.js       # Vote counter / number formatter (e.g. 12.5k)
│   │   └── timeFormat.js       # Runtime conversion (minutes to hrs/mins)
│   ├── pages/                  # Top-level page views
│   │   ├── admim/              # Admin management views
│   │   │   ├── AddShow.jsx     # Form to schedule new movie screenings
│   │   │   ├── Dashboard.jsx   # Admin statistics & KPI cards
│   │   │   ├── Layout.jsx      # Admin nested layout container
│   │   │   ├── ListBookings.jsx# View all booked tickets
│   │   │   └── ListShow.jsx    # View all active screenings
│   │   ├── Favourite.jsx       # Saved movies list
│   │   ├── Home.jsx            # Landing page
│   │   ├── MovieDetails.jsx    # Single movie details and date selection
│   │   ├── Movies.jsx          # All movies catalogue
│   │   ├── MyBookings.jsx      # User's ticket reservations
│   │   └── SeatLayout.jsx      # Interactive seat grid & checkout
│   ├── App.jsx                 # Routing configuration & global toaster
│   ├── index.css               # Design system tokens, font imports & global styles
│   └── main.jsx                # Application root with Clerk & Router providers
├── .env.example                # Template for environment variables
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Tailwind styling configuration
└── vite.config.js              # Vite configuration
```

---

## 🚦 Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**: `v18.0.0` or higher
- **npm** (or `pnpm` / `yarn`)

### 1. Clone & Navigate
```bash
git clone <repository-url>
cd Movie_Ticket_Booking/client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root of the `client` directory by copying `.env.example`:

```bash
cp .env.example .env
```

Configure your variables in `.env`:

```env
# Clerk Publishable Key (from https://dashboard.clerk.com/)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here

# Currency Symbol for pricing display (optional, defaults to ₹)
VITE_CURRENCY=₹
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles the production build into the `dist/` directory |
| `npm run preview` | Locally preview the production build output |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🗺️ Application Routes

### Public & User Routes
| Route | Page / View | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Hero banner, featured releases, and video trailers |
| `/movies` | `Movies` | Full catalogue of movies currently playing |
| `/movies/:id` | `MovieDetails` | Synopsis, cast list, rating stats, and date picker |
| `/booking/:id/:date` | `SeatLayout` | Select showtime, choose cinema seats, and checkout |
| `/my-bookings` | `MyBookings` | View reserved tickets, seat numbers, and invoice status |
| `/favourite` | `Favourite` | View favourite/bookmarked movies |

### Admin Routes (`/admin/*`)
| Route | Page / View | Description |
| :--- | :--- | :--- |
| `/admin` | `Dashboard` | High-level metrics: revenue, bookings, active shows, users |
| `/admin/add-shows` | `AddShow` | Schedule screenings with dates, times, and prices |
| `/admin/list-shows` | `ListShow` | List and manage scheduled shows |
| `/admin/list-bookings` | `ListBookings` | View all customer bookings and payments |

---

## 🔐 Authentication Setup (Clerk)

Clerk manages authentication entirely on the client side without needing your own server:

1. Sign up or log into the [Clerk Dashboard](https://dashboard.clerk.com/).
2. Create an application and choose your preferred sign-in methods (Email, Google, etc.).
3. Copy your **Publishable Key** from **API Keys**.
4. Paste it into your `.env` file under `VITE_CLERK_PUBLISHABLE_KEY`.

---

## 🌐 Deployment (Vercel)

This frontend is configured for instant deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project in Vercel and set the Root Directory to `client` (if applicable).
3. Add your Environment Variable:
   - `VITE_CLERK_PUBLISHABLE_KEY` = `your_clerk_publishable_key`
4. Click **Deploy**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
