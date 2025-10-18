import 'react';
import '../styles/Filters.css'; 

const Filters = ({ updateName, updateHouse, name, house, uniqueHouses }) => {
    const handleChangeName = (ev) => {
        updateName(ev.target.value)
    }

    const handleChangeHouse = (ev) => {
        updateHouse(ev.target.value);
    }

    return (
        <section className="filters">
            <div className="filter-group">
                <div className="filter-item">
                    <label htmlFor="name">Busca por personaje:</label>
                    <input 
                        name="name" 
                        id="name" 
                        value={name} 
                        onChange={handleChangeName}
                    />
                </div>

                <div className="filter-item">
                    <label htmlFor="house">Selecciona la casa:</label>
                    <select name="house" id="house" value={house} onChange={handleChangeHouse}>
                        <option value="">Todas las casas</option>
                        {uniqueHouses.map((house, index) => {
                            return (
                                <option key={index} value={house}>{house}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </section>
    )
}

export default Filters;