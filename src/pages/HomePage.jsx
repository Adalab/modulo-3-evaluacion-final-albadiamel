import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ls from "../services/localStorage";
import getCharacters from '../services/api';
import Filters from '../components/Filters';


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
            <Filters 
                updateName={updateName}
                updateHouse={updateHouse}
                name={name}
                house={house}
                uniqueHouses={getHouses()}
            />

            <section>
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
                                    <img 
                                        src={character.image || "https://placehold.co/600x400?text=HarryPotter"}
                                        alt={character.name}
                                    />
                                    <p>{character.name}</p>
                                    <p>{character.species}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}

export default HomePage;