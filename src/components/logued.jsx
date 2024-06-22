import Header from "./header";
import Footer from "./footer";
import('../styles/profile.css');

import { useState, useEffect } from "react";

import axios from "axios";

function Logued() {
    const [cancha, setCancha] = useState({
        address: "",
        name: "",
        openTime: "",
        closeTime: "",
        user: "",
        password: "",
        pricing: "",
        reserves: []
    });

    const url = window.location.pathname;
    const userId = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        const getNombreCancha = async () => {
            try {
                const { data } = await axios.get(`http://localhost:4000/users/${userId}`);
                setCancha({
                    address: data.address,
                    name: data.name,
                    openTime: data.openTime,
                    closeTime: data.closeTime,
                    user: data.user,
                    password: data.password,
                    pricing: data.pricing,
                    reserves: data.reserves
                });

            } catch (error) {
                console.error("Error fetching cancha data:", error);
            }
        };

        getNombreCancha();

    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCancha(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const dataToUpdate = Object.keys(cancha)
        .filter(key => typeof cancha[key] === 'string' && cancha[key].trim() !== '')
        .reduce((obj, key) => {
            obj[key] = cancha[key];
            return obj;
        }, {});
    
        axios.put(`http://localhost:4000/users/${userId}`, dataToUpdate)
            .then(response => {
            console.log('Datos actualizados', response.data);
            })
            .catch(error => {
            console.error('Error al actualizar los datos', error);
        });
    };

    const eliminarReserva = async (email) => {
        try {
            await axios.delete(`http://localhost:4000/reserve/${userId}`, {
                data: {
                    email: email
                }
            });

            alert("Reserva eliminada");
            window.location.reload();
        } catch (error) {
            console.error('Error al eliminar reserva:', error);
        }
    };

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="profileContainer">
                <div className="editPerfil">
                    <h2>Bienvenido {cancha.name}</h2>
                    <h4>Editar perfil</h4>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="name">Nuevo nombre</label>
                                <input type="text" id="name" name="name" onChange={handleChange}/>
                            </li>
                            <li>
                                <label htmlFor="address">Nueva dirección</label>
                                <input type="text" id="address" name="address" onChange={handleChange}/>
                            </li>
                            <li>
                                <label htmlFor="opentime">Nuevo horario de apertura</label>
                                <input type="text" id="opentime" name="opentime" onChange={handleChange}/>
                            </li>
                            <li>
                                <label htmlFor="closetime">Nuevo horario de cierre</label>
                                <input type="text" id="closetime" name="closetime" onChange={handleChange}/>
                            </li>
                            <li>
                                <label htmlFor="pricing">Nuevo precio</label>
                                <input type="text" id="pricing" name="pricing" onChange={handleChange}/>
                            </li>
                            <li>
                                <label htmlFor="password">Nueva contraseña</label>
                                <input type="text" id="password" name="password" onChange={handleChange}/>
                            </li>
                            <li>
                                <button type="submit">Guardar datos</button>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="reservesContainer">
                    <h3>Reservas:</h3>
                    {cancha.reserves.map((reserve, index) => (
                        <div key={index} className="reserve">
                            <p>{reserve.email}</p>
                            <p>{reserve.date}</p>
                            <p>{reserve.time}</p>
                            <p>{reserve.footballType}</p>
                            <button onClick={() => eliminarReserva(reserve.email)}>Eliminar reserva</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Logued