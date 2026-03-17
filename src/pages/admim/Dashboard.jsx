import { ChartLineIcon, IndianRupee, PlayCircle, Users, Star } from "lucide-react";
import React, { useEffect } from "react";
import { dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import BlurCircle from "../../components/BlurCircle";
import { dateFormat } from "../../lib/dateFormat";
import { kConverter } from "../../lib/kconverter";
const Dashboard = () => {
  const currency = import.meta.env.VITE_REACT_APP_CURRENCY;

  const [DashboardData, setDashboardData] = React.useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });
  const [loading, setLoading] = React.useState(true);
  const dashboardCards = [
    {
      title: "Total Bookings",
      value: DashboardData.totalBookings || 0,
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: `${currency || '₹'}${DashboardData.totalRevenue || 0}`,
      icon: IndianRupee,
    },
    {
      title: "Active Shows",
      value: DashboardData.activeShows?.length || 0,
      icon: PlayCircle,
    },
    {
      title: "Total Users",
      value: DashboardData.totalUser || 0,
      icon: Users,
    },
  ];
  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return !loading ? (
    <>
      <Title text1="Admin" text2="Dashboard" />
      <div className="relative flex flex-wrap gap-4 mt-6">
        <BlurCircle top="-100px" left="0"/>
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div key={index} className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md max-w-50 w-full">
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">{card.value}</p>
              </div>
              <card.icon className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-10">
        <p className="mt-10 text-lg font-medium">Active Shows</p>
        <div className="relative flex scroll flex-wrap gap-6 mt-4 overflow-x-auto">
          <BlurCircle top="100px" left="-10%" />
          {DashboardData.activeShows.map((show) => (
            <div key={show._id} className="w-55 rounded-lg overflow-hidden h-full pb-3 bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300">
              <img src={show.movie.poster_path} alt="" className="h-60 w-full object-cover" />
              <p className="font-medium p-2 truncate">{show.movie.title}</p>
              <div className="flex items-center justify-between px-2">
                <p className="text-lg font-medium">{currency} {show.showPrice}</p>
                <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                  <Star className="w-4 h-4 text-red-500 fill-red-500" />
                  {show.movie.vote_average.toFixed(1)} ({kConverter(show.movie.vote_count)})
                </p>
              </div>
              <p className="px-2 py-2 text-sm text-gray-500">{dateFormat(show.showDateTime)}</p>
            </div>
          ))}
        </div>
      </div>
    
    </>
  ) : (
    <Loading />
  );
};

export default Dashboard;
