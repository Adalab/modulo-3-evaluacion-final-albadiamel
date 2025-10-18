import 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';


const CharacterList = ({ characters, name, house, }) => {

    return (
        <ul>
            {characters
            .filter(character => character.name.toLowerCase().includes(name.toLocaleLowerCase()))
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
                        character={character}
                        />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default CharacterList;