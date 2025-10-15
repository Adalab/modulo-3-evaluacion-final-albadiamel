import { useState, useEffect } from 'react';
import getCharacters from '../services/api';

const HomePage = () => {
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(data => {
            setCharacters(data);
        })
    }, []);

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    }

    const handleChangeHouse = (ev) => {
        setHouse(ev.target.value);
    }

    const getHouses = () => {
        const houses = characters.map(character => character.house);
        const uniqueHouses = new Set(houses);
        const uniqueArray =[...uniqueHouses];
        return uniqueArray;
    }

    getHouses();

    return (
        <>
            <section>
                <label htmlFor="name">Busca por personaje:</label>
                <input  name="name" id="name" value={name} onChange={handleChangeName}/>

                <label htmlFor="house">
                    Selecciona la casa:
                    <select name="house" id="house" value={house} onChange={handleChangeHouse}>
                        <option value="">Todas</option>
                        {getHouses().map((house, index) => {
                            return (
                                <option key={index} value={house}>{house}</option>
                            )
                        })}
                    </select>
                </label>
            </section>

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
                                <img 
                                    src={character.image || "https://placehold.co/600x400?text=HarryPotter"}
                                    alt={character.name}
                                />
                                <p>{character.name}</p>
                                <p>{character.species}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}

export default HomePage;