import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){

    const[search, setSearch] = useState("");

    const movies = [
        {id :1, title : "puli", release_date : "2014"},
        {id :2, title : "puli2", release_date : "2010"},
        {id :3, title : "The Dark Knight", release_date : "2008" }
    ]

    const handleSearch = (e) =>{
    e.preventDefault();
    alert("HI");
    setSearch("");
    }


return (
  <div className="home">

    <form onSubmit={handleSearch} className="search-form">
      <input className="search-input"
      type="text" 
      placeholder="Search for a movie..."

        value ={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      <button className="search-button" type="submit">Search</button>
    </form>

    <div className="movies-grid">
        <br></br>
      {movies.map((movie) => (
        movie.title.toLowerCase().startsWith(search) &&
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>

  </div>
);
}

export default Home;  // export the Home component