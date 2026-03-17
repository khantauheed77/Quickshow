import React, { useEffect } from "react";
import { dummyBookingData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";

const ListBookings = () => {
  const currency = import.meta.env.VITE_REACT_APP_CURRENCY || "₹";
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getAllBookings = async () => {
    setBookings(dummyBookingData);
    setLoading(false);
  };

useEffect(() =>{
  getAllBookings();
},[]);
  return !loading ? (
    <>
    <Title text1="List" text2="Bookings" />
    <div className="max-w-4xl mt-6 overflow-x-auto">
      <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
        <thead>
          <tr className="bg-red-500/20 text-left text-white">
            <th className="p-2 font-medium pl-5">User Name</th>
            <th className="p-2 font-medium">Movie Name</th>
            <th className="p-2 font-medium">Seats</th>
            <th className="p-2 font-medium">Amount</th>
            <th className="p-2 font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-2 pl-5">{booking.user.name}</td>
              <td className="p-2">{booking.show.movie.title}</td>
              <td className="p-2">{booking.bookedSeats.join(", ")}</td>
              <td className="p-2">{currency} {booking.amount}</td>
              <td className="p-2">{new Date(booking.show.showDateTime).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  ) :  <Loading/>;
};

export default ListBookings;
