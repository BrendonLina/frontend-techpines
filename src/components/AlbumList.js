import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTrack from './AddFaixa';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

    const fetchAlbums = async () => {
        const response = await axios.get('http://localhost:8000/api/albums');
        setAlbums(response.data);
    };

    const handleDeleteAlbum = async (id) => {
        await axios.delete(`http://localhost:8000/api/albums/${id}`);
        fetchAlbums();
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    return (
        <div>
            <h2>Lista de Álbuns</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.name} - {album.artista}
                        <button onClick={() => handleDeleteAlbum(album.id)}>Excluir Álbum</button>
                        <AddTrack albumId={album.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
