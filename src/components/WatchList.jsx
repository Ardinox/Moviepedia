import React, { useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchlist, setWatchlist }) {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-900 rounded-xl text-white font-bold">
          Fantasy
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-red-400 rounded-xl text-white font-bold">
          Romance
        </div>
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[2.5rem] w-[18rem] px-3 bg-gray-300 outline-none"
        />
      </div>
      <div className="overflow-hidden bg-gray-100 border border-gray-200 m-8">
        <table className="w-full text-grey-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center items-center gap-1">
                  <div className="p-2 cursor-pointer" onClick={sortIncreasing}>
                    <i className="fa-sharp fa-solid fa-arrow-up"></i>
                  </div>
                  Ratings
                  <div className="p-2 cursor-pointer" onClick={sortDecreasing}>
                    <i className="fa-sharp fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[10rem] w-[7rem] object-cover"
                        src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
                      />
                      <div className="mx-8">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
