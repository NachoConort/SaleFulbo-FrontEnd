import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";

import('../styles/reserve.css');

import axios from "axios";
import moment from 'moment';

function Reserve() {
    const [cancha, setCancha] = useState({
        name: "",
        openTime: "",
        closeTime: ""
    });

    const [intervals, setIntervals] = useState([])

    const url = window.location.pathname;
    const userId = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        const getNombreCancha = async () => {
            try {
                const { data } = await axios.get(`http://localhost:4000/users/${userId}`);
                setCancha({
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


    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="reserveContainer">
            <h3>Reservar cancha en {cancha.name}</h3>
                <form action="post">
                    <ul>
                        <li>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="text" id="email" placeholder="ejemplo@gmail.com"/>
                        </li>
                        <li>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" placeholder="Ingresa tu nombre"/>
                        </li>
                        <li>
                            <label htmlFor="time">Horario</label>
                            <select name="time" id="time">
                                {intervals.map(hour => (
                                    <option key={hour}>
                                        {hour}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li>
                            <label htmlFor="footballType">Cancha para equipos de</label>
                            <select name="footballType" id="footballType">
                                <option value="">5</option>
                                <option value="">7</option>
                                <option value="">11</option>
                            </select>
                        </li>
                        <li>
                            <button type="submit">Confirmar reserva</button>
                        </li>
                    </ul>
                </form>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Reserve