import React, { useState } from "react";
import axios from "axios";
import './styles.css'
// import { useDisclosure } from "@mantine/hooks";
// import Link from "next/link";

function MovieSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const {classes, cx} = useStyles();

    const API_KEY = "398a706";
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

    const searchMovie = async () => {
        try {
            const response = await axios.get(`${API_URL}${searchTerm}`);
            setSearchResults(response.data.Search || []);
        } catch (error) {
            console.error('Error:',error);
        }
    };

    return (
        <div className="root">
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a movie" 
                className="input"
            />
            <button onClick={searchMovie} className="search-bt">Search</button>

            <div>
                {searchResults.map((movie) => (
                    <div key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;