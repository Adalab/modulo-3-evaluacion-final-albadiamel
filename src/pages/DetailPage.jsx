import 'react';
import { useParams } from 'react-router-dom';
import ls from "../services/localStorage";
import CharacterDetail from '../components/CharacterDetail';


const DetailPage = () => {
    const { id } = useParams();
    const characters = ls.get("characters", []);
    const character = characters.find(character => character.id === id);

    return (
        <CharacterDetail 
        character={character}
        />
    )
}

export default DetailPage;