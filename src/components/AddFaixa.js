import React, { useState } from 'react';
import axios from 'axios';

const AddTrack = ({ albumId }) => {
    const [name, setName] = useState('');
    const [duracao, setDuracao] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8000/api/albums/${albumId}/faixas`, { name, duracao });
        setName('');
        setDuracao('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nome da Faixa" 
                required 
            />
            <input 
                type="number" 
                value={duracao} 
                onChange={(e) => setDuracao(e.target.value)} 
                placeholder="Duração em segundos" 
                required 
            />
            <button type="submit">Adicionar Faixa</button>
        </form>
    );
};

export default AddTrack;
