import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import getCharacters from '../services/api';


const DetailPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState("");

    useEffect(() => {
        getCharacters().then(data => {
            const characterData = data.find(character => character.id === id);
            setCharacter(characterData);
        })
    }, [id]);

    return (
        <>
        <section>
            {character ? (
                <section>
                    <img 
                    src={character.image || "https://placehold.co/600x400?text=HarryPotter"}
                    alt={character.name}
                    />
                    <p>Estatus: {character.alive ? (character.gender === "female" ? "Viva" : "Vivo")
                    : (character.gender === "female" ? "Muerta" : "Muerto")}</p>
                    <p>Especie: {character.species}</p>
                    <p>Género: {character.gender}</p>
                    <p>Casa: {character.house}</p>
                    <Link to="/">Volver</Link>
                </section>
            ) : (
                <section>
                    <p>Personaje no encontrado</p>
                    <Link to="/">Volver</Link>
                </section>
            )}
        </section>
        </>
    )
}

export default DetailPage;