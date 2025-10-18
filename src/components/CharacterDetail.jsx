import 'react';
import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.css';

const CharacterDetail = ({ character }) => {

    const getHouseClass = () => {
        if (!character?.house) return 'no-house';
        return character.house.toLowerCase();
    }

    return (
        <>
            {character ? (
                <div className={`character-detail ${getHouseClass()}`}>
                    <div className="detail-content">
                        <div className="detail-photo-frame">
                            <img 
                                src={character.image || "https://placehold.co/600x400?text=HarryPotter"}
                                alt={character.name}
                            />
                        </div>
                        
                        <div className="detail-info">
                            <h2>{character.name}</h2>
                            <p className="detail-house">{character.house}</p>
                            
                            <ul className="detail-list">
                                <li className="detail-item">
                                    <p className="detail-label">Estatus:</p>
                                    <p className="detail-value">
                                        {character.alive ? (character.gender === "female" ? "Viva" : "Vivo") : (character.gender === "female" ? "Muerta" : "Muerto")}
                                    </p>
                                </li>
                                <li className="detail-item">
                                    <p className="detail-label">Especie:</p>
                                    <p className="detail-value">{character.species}</p>
                                </li>
                                <li className="detail-item">
                                    <p className="detail-label">Género:</p>
                                    <p className="detail-value">{character.gender}</p>
                                </li>
                                <li className="detail-item">
                                    <p className="detail-label">Casa:</p>
                                    <p className="detail-value">{character.house}</p>
                                </li>
                            </ul>

                            <Link to="/" className="back-button">Volver</Link>
                        </div>
                    </div>
                </div>
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