import 'react';
import { Link } from 'react-router-dom';


const CharacterDetail = ({ character }) => {

    return (
        <>
            {character ? (
                <>
                    <img 
                        src={character.image || "https://placehold.co/600x400?text=HarryPotter"}
                        alt={character.name}
                    />
                    <p>{character.name}</p>
                    <p>Estatus: {character.alive ? (character.gender === "female" ? "viva" : "vivo") : (character.gender === "female" ? "muerta" : "muerto")}</p>
                    <p>Especie: {character.species}</p>
                    <p>Género: {character.gender}</p>
                    <p>Casa: {character.house}</p>
                    <Link to="/">Volver</Link>
                </>
            ) : (
                <>
                    <p>Personaje no encontrado</p>
                    <Link to="/">Volver</Link>
                </>
            )}
        </>
    )
}

export default CharacterDetail;