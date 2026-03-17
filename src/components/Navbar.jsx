import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link to={"/"} className="flex-shrink-0">
        <img src={assets.logo} alt="" className="w-36 h-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full backdrop-blur bg-white/10 border border-gray-300/20">
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false);}} to="/">Home</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false);}} to="/movies">Movies</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false);}} to="/">Theaters</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false);}} to="/">Releases</Link>
        <Link onClick={() => {scrollTo(0,0); setIsMenuOpen(false);}} to="/favourite">Favourites</Link>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg font-medium md:hidden transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <XIcon
          className="absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/movies" onClick={() => setIsMenuOpen(false)}>
          Movies
        </Link>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Theaters
        </Link>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Releases
        </Link>
        <Link to="/favourite" onClick={() => setIsMenuOpen(false)}>
          Favourites
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <SearchIcon className="md:hidden w-6 h-6 cursor-pointer" />
        {!user ? (
          <button onClick={openSignIn} className="px-4 py-1 sm:px-7 sm:py-2 bg-red-500 hover:bg-red-600 transition rounded-full font-medium">
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action 
                label="My Bookings" 
                labelIcon={<TicketPlus width={15}/>} 
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <MenuIcon
          className="md:hidden w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
