import React, { useState } from 'react';
import axios from 'axios';

const AddAlbum = () => {
    const [name, setName] = useState('');
    const [artista, setArtista] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/albums', {
            name,
            artista,
            data_lancamento: dataLancamento
        });
        setName('');
        setArtista('');
        setDataLancamento('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nome do Álbum" 
                required 
            />
            <input 
                type="text" 
                value={artista} 
                onChange={(e) => setArtista(e.target.value)} 
                placeholder="Artista" 
            />
            <input 
                type="date" 
                value={dataLancamento} 
                onChange={(e) => setDataLancamento(e.target.value)} 
            />
            <button type="submit">Adicionar Álbum</button>
        </form>
    );
};

export default AddAlbum;
