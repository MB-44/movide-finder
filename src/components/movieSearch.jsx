import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import axios from "axios";

function MovieSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=398a706"

    const searchMovie = async () => {
        try {
            const response = await axios.get(API_KEY);
            setSearchResults(response.data.Search || []);
        } catch (error) {
            console.error('Error:',error);
        }
    };

    return (
        <div>
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a movie" 
            />
            <button onClick={searchMovie}>Search</button>

            <div>
                {searchResults.map((movie) => (
                    <div key={movie.imdbID}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;