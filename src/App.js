import React, { useState } from 'react';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import Search from './components/Search';
import './styles/App.css';

function App() {
    const [albums, setAlbums] = useState([]);

    const handleSearch = (data) => {
        setAlbums(data); 
    };

    return (
        <div className="container">
            <h1>Álbuns e Faixas</h1>
            <Search onSearch={handleSearch} /> {}
            <AddAlbum />
            <AlbumList albums={albums} /> {}
        </div>
    );
}

export default App;

