import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ls from "../services/localStorage";
import getCharacters from '../services/api';
import Filters from '../components/Filters';
import CharacterList from '../components/CharacterList';
import Header from '../components/Header';
import '../styles/Header.css';


const HomePage = () => {
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(data => {
            setCharacters(data);
            ls.set("characters", data);
        })
    }, []);

    const updateName = (value) => {
        setName(value);
    }

    const updateHouse = (value) => {
        setHouse(value);
    }

    const getHouses = () => {
        const houses = characters.map(character => character.house)
        .filter(house => {
            return house ? true : false;
        });
        const uniqueHouses = new Set(houses);
        const uniqueArray =[...uniqueHouses];
        return uniqueArray;
    }

    getHouses();

    return (
        <>
            <Header />

            <section>
                <Filters 
                    updateName={updateName}
                    updateHouse={updateHouse}
                    name={name}
                    house={house}
                    uniqueHouses={getHouses()}
                />
            </section>

            <section>
                <CharacterList 
                characters={characters}
                name={name}
                house={house}
                />
            </section>
        </>
    )
}

export default HomePage;