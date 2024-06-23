import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";

import('../styles/reserve.css');

import axios from "axios";
import moment from 'moment';

function Reserve() {
    const [cancha, setCancha] = useState({
        address: "",
        name: "",
        openTime: "",
        closeTime: ""
    });

    const [intervals, setIntervals] = useState([]);
    const [reserve, setReserve] = useState({
        email:"",
        name: "",
        date: "",
        time: "",
        footballType: ""
    });

    const [reservations, setReservations] = useState([]);

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
                });

            } catch (error) {
                console.error("Error fetching cancha data:", error);
            }
        };

        getNombreCancha();

    }, [userId]);

    useEffect(() => {
        if (cancha.openTime && cancha.closeTime) {
            const generateIntervals = () => {
                const openTime = moment(cancha.openTime, 'HH:mm');
                let closeTime = moment(cancha.closeTime, 'HH:mm');
                
                if (cancha.closeTime === '00:00') {
                    closeTime = moment('24:00', 'HH:mm');
                }

                const hours = [];

                while (openTime.isBefore(closeTime)) {
                    hours.push(openTime.format('HH:mm'));
                    openTime.add(1, 'hour');
                }

                setIntervals(hours);
            };

            generateIntervals();
        }
    }, [cancha]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const { data } = await axios.get(`http://localhost:4000/reserve/${userId}`);
                setReservations(data);
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };

        fetchReservations();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReserve(prevReserve => ({
            ...prevReserve,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isTimeSlotAvailable = reservations.every(reservation => {
            return !(reservation.date === reserve.date && reservation.time === reserve.time);
        });

        if (!isTimeSlotAvailable) {
            alert('El horario seleccionado ya está reservado. Por favor, elige otro horario.');
            return;
        }

        try {
            await axios.post(`http://localhost:4000/reserve/${userId}`, reserve);
            alert('Reserva confirmada!');
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert('Hubo un error al confirmar la reserva. Por favor, inténtalo de nuevo.');
        }
    };

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="reserveContainerFather">
                <div className="reserveContainer">
                    <h3>Reservar cancha en {cancha.name}</h3>
                    <form action="post" onSubmit={handleSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="ejemplo@gmail.com"
                                    value={reserve.email}
                                    onChange={handleChange}
                                    className="inputPersonalized"
                                />
                            </li>
                            <li>
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingresa tu nombre"
                                value={reserve.name}
                                onChange={handleChange}
                                className="inputPersonalized"
                            />
                            </li>
                            <li>
                                <label htmlFor="date">Día</label>
                                <input 
                                    type="date" 
                                    name="date"
                                    value={reserve.date}
                                    onChange={handleChange}
                                    className="inputPersonalized"
                                />
                            </li>
                            <li>
                                <label htmlFor="time">Horarios disponibles</label>
                                <select 
                                    name="time"
                                    id="time"
                                    value={reserve.time}
                                    onChange={handleChange}
                                    className="inputPersonalized"
                                >
                                    <option value="" disabled>Seleccione un horario</option>
                                    {intervals.map(hour => (
                                        <option key={hour} value={hour}>{hour}</option>
                                    ))}
                                </select>
                            </li>
                            <li>
                                <label htmlFor="footballType">Cancha para equipos de</label>
                                <select 
                                    name="footballType"
                                    id="footballType"
                                    value={reserve.footballType}
                                    onChange={handleChange}
                                    className="inputPersonalized"
                                >
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value="5">5</option>
                                    <option value="7">7</option>
                                    <option value="11">11</option>
                                </select>
                            </li>
                            <li>
                                <button type="submit">Confirmar reserva</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Reserve