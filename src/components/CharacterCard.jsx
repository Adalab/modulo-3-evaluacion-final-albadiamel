import 'react';

const CharacterCard = ({ character }) => {

    return (
        <>
            <img 
                src={character.image || "https://placehold.co/600x400?text=HarryPotter"}
                alt={character.name}
            />
            <p>{character.name}</p>
            <p>{character.species}</p>
        </>
    )
}

export default CharacterCard;