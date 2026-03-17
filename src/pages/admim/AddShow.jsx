import React, { useState, useEffect } from "react";
import { dummyShowsData } from "../../assets/assets";
import Title from "../../components/admin/Title";
import { CheckIcon, StarIcon, Trash2 } from "lucide-react";
import { kConverter } from "../../lib/kconverter";
import Loading from "../../components/Loading";

const AddShow = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  // ✅ Add Date & Time
  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;

    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];

      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }

      return prev;
    });

    setDateTimeInput("");
  };

  // ✅ Remove Date & Time
  const handleDateTimeRemove = (date, time) => {
    setDateTimeSelection((prev) => {
      const times = prev[date] || [];

      return {
        ...prev,
        [date]: times.filter((t) => t !== time),
      };
    });
  };

  // ✅ Load Dummy Movies
  useEffect(() => {
    setNowPlayingMovies(dummyShowsData);
  }, []);

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />

      {/* Movies List */}
      <p className="mt-20 text-lg font-medium">Now Playing Movies</p>

      <div className="overflow-x-auto pb-4">
        <div className="flex flex-wrap gap-4 mt-4">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie.id)}
              className={`relative cursor-pointer border-2 rounded-lg overflow-hidden max-w-40 ${
                selectedMovie === movie.id
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            >
              {/* Poster */}
              <div className="relative">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full pointer-events-none"
                />

                {/* Rating */}
                <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0">
                  <p className="flex items-center gap-1 text-gray-400">
                    <StarIcon className="w-4 h-4 text-red-500 fill-red-500" />
                    {movie.vote_average.toFixed(1)}
                  </p>

                  <p className="text-gray-400">
                    {kConverter(movie.vote_count)} Votes
                  </p>
                </div>

                {/* Selected Check */}
                {selectedMovie === movie.id && (
                  <div className="absolute top-2 right-2 bg-red-500 rounded-full p-1 pointer-events-none">
                    <CheckIcon
                      className="w-5 h-5 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                )}
              </div>

              {/* Movie Info */}
              <div className="p-2 bg-gray-900">
                <p className="font-medium truncate text-sm">{movie.title}</p>
                <p className="text-gray-400 text-xs mt-1">
                  {movie.release_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show Price */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show Price</label>

        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm">{currency}</p>

          <input
            min={0}
            type="number"
            placeholder="Enter Show Price"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            className="outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Date Time Input */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Select Date & Time
        </label>

        <div className="inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none rounded-md bg-transparent"
          />

          <button
            onClick={handleDateTimeAdd}
            className="bg-red-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-red-600 cursor-pointer"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Selected Date-Time Display */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <div className="mb-2 font-medium">Selected Date-Time</div>

          <ul className="space-y-3">
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <li key={date}>
                <div className="font-medium">{date}</div>

                <div className="flex flex-wrap gap-2 mt-2 text-sm">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="border border-red-500 px-2 py-1 flex items-center rounded"
                    >
                      <span>{time}</span>

                      <Trash2
                        onClick={() => handleDateTimeRemove(date, time)}
                        size={15}
                        className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer space-y-3 hover:bg-red-600">
        Add Show
      </button>
    </>
  ) : (
    <Loading />
  );
};

export default AddShow;
