# 🎬 CinePass - Movie Ticket Booking Platform (Frontend)

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com/)
[![React Router](https://img.shields.io/badge/Router-v7.12-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)

A modern, fast, and feature-rich **pure frontend** movie ticket booking web application. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Clerk Authentication**. 

It features an immersive cinematic dark UI, real-time interactive seat selection, trailer integration, and an admin management portal — completely self-contained with mock datasets and client-side state (no backend required).

---

## 🌟 Features

### 👤 Customer Experience
- **Cinematic Dark Theme**: Sleek, high-contrast dark aesthetic with glowing ambient blur accents and responsive typography.
- **Hero & Featured Shows**: Dynamic showcase of trending movies, ratings, genres, and instant booking shortcuts.
- **Trailer Showcase**: Embedded responsive YouTube trailer player with quick trailer preview selection.
- **Movie Details**: Complete information including overview, runtime, release date, IMDb/audience score ratings, genre tags, and cast members.
- **Interactive Seat Selection**:
  - Live 10-row cinema seating grid with grouped aisles.
  - Visual cinema screen perspective indicator.
  - Multi-seat selection (up to 5 tickets) with real-time state management.
  - Showtime selector for specific movie dates.
- **My Bookings (`/my-bookings`)**: Order overview displaying booked seats, timing, payment status, and quick pay actions.
- **Favourites (`/favourite`)**: Quick-access list to save and track preferred titles.
- **Seamless Authentication**: Powered by Clerk for secure signup, login, modal management, and user profiles.
- **Notifications**: Instant feedback via React Hot Toast.

### 🛡️ Admin Management Portal (`/admin`)
- **Dashboard Overview**: Key business analytics including:
  - Total Bookings
  - Total Revenue
  - Active Shows
  - Total Users
- **Add Shows**: Intuitive interface to select movies, configure custom dates & showtimes, and set ticket pricing.
- **List Shows**: View, inspect, and manage all active scheduled screenings.
- **List Bookings**: Comprehensive log of customer bookings, seat allocations, and payment states.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library |
| **[Vite 7](https://vitejs.dev/)** | Next-generation frontend build tooling and dev server |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Modern utility-first styling with native CSS imports |
| **[@clerk/clerk-react](https://clerk.com/)** | User authentication and session management |
| **[React Router DOM v7](https://reactrouter.com/)** | Client-side routing and nested administrative layouts |
| **[Lucide React](https://lucide.dev/)** | Clean, customizable iconography |
| **[React Hot Toast](https://react-hot-toast.com/)** | Modern notifications and alerts |
| **[React Player](https://github.com/cookpete/react-player)** | Video playback integration |

---

## 📁 Project Structure

```text
client/
├── public/                     # Static assets
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
│   │   ├── kconverter.js       # Large number / vote counter formatter (e.g., 12.5k)
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
Create a `.env` file in the root of the project by copying `.env.example`:

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

1. Sign up or log into [Clerk Dashboard](https://dashboard.clerk.com/).
2. Create an application and choose your preferred authentication methods (Email, Google, etc.).
3. Copy your **Publishable Key** from **API Keys**.
4. Paste it into your `.env` file under `VITE_CLERK_PUBLISHABLE_KEY`.

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
