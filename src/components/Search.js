import React, { useState } from 'react';
import axios from 'axios';

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.get(`http://localhost:8000/api/albums?search=${searchTerm}`);
            if (response.data.length === 0) {
                setMessage('0 resultados na busca.'); 
            } else {
                onSearch(response.data);
                setMessage(`Encontrados ${response.data.length} álbum(s).`);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage('0 resultados na busca.');
            } else {
                console.error("Erro ao buscar álbuns:", error);
                setMessage('Erro ao buscar álbuns.');
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Pesquisar álbuns..." 
                />
                <button type="submit">Pesquisar</button>
            </form>
            {message && <p>{message}</p>} {}
        </div>
    );
}

export default Search;
