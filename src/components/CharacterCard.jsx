import 'react';
import '../styles/CharacterCard.css'; // ✅ AÑADIR

const CharacterCard = ({ character }) => {

    return (
        <div className="character-card"> 
            <div className="photo-frame">
                <img 
                    src={character.image || "https://placehold.co/600x400?text=HarryPotter"}
                    alt={character.name}
                />
            </div>
            <p className="character-name">{character.name}</p>
            <p className="character-species">{character.species}</p>
        </div>
    )
}

export default CharacterCard;