import 'react';

const Filters = ({ updateName, updateHouse, name, house, uniqueHouses }) => {
        const handleChangeName = (ev) => {
            updateName(ev.target.value)
    }

    const handleChangeHouse = (ev) => {
        updateHouse(ev.target.value);
    }

    return (
        <section>
            <label htmlFor="name">Busca por personaje:</label>
            <input  name="name" id="name" value={name} onChange={handleChangeName}/>

            <label htmlFor="house">
                Selecciona la casa:
                <select name="house" id="house" value={house} onChange={handleChangeHouse}>
                    <option value="">Todas</option>
                    {uniqueHouses.map((house, index) => {
                        return (
                            <option key={index} value={house}>{house}</option>
                        )
                    })}
                </select>
            </label>
        </section>
    )
}

export default Filters;