import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="h-screen w-screen bg-gray-100 p-2 overflow-hidden">

      {/* GRID */}
      <div className="grid grid-cols-5 grid-rows-2 gap-2 h-[85%]">
        {data.map((img) => (
          <div
            key={img.id}
            className="relative rounded-lg overflow-hidden group"
          >
            <img
              src={img.download_url}
              alt={img.author}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover author */}
            <div className="absolute inset-0 bg-black/60 
                            flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-xs font-semibold">
                {img.author}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <div className="flex justify-between items-center h-[15%] px-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-1.5 rounded-full text-sm
            ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
        >
          Prev
        </button>

        <span className="font-semibold text-sm">Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-1.5 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
