import 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.css';

const CharacterList = ({ characters, name, house }) => {
    
    return (
        <ul className="character-list">
            {characters
            .filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
            .filter(character => {
                if (house === "") {
                    return true;
                } else {
                    return house === character.house;
                }
            })
            .map(character => {
                return (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>
                            <CharacterCard 
                            character={character} />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default CharacterList;