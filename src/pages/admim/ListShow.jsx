import React, { useEffect } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';

const ListShow = () => {

  const currency = import.meta.env.VITE_REACT_APP_CURRENCY || '₹';
  const [shows, setShows] = React.useState([]);
  const [loading, setLoading] = React.useState(true); 
  const getAllShows = async () => {
    try {
      setShows([{
        movie : dummyShowsData[0],
        showDate: '2024-07-01',
        showPrice: 150,
        occupiedSeats: {
          A1 : 'user-1',
          B1 : 'user-2',
          C1 : 'user-3'
        }
      }]);
      setLoading(false);
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(() => {
    getAllShows();
  }, []);
  return !loading ? (
    <>
      <Title text1="List" text2="Shows" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className="bg-red-500/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Total Bookings</th>
              <th className="p-2 font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {shows.map((show, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2 pl-5">{show.movie.title}</td>
                <td className="p-2">{show.showDate}</td>
                <td className="p-2">{Object.keys(show.occupiedSeats).length}</td>
                <td className="p-2">{currency}{show.showPrice * Object.keys(show.occupiedSeats).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading/>
  )
}

export default ListShow
