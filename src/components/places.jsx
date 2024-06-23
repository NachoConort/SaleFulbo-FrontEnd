import '../styles/places.css'
import fieldIcon from '../assets/field.png';
import locationIcon from '../assets/location.png';
import timeIcon from '../assets/time.png';
import priceIcon from '../assets/price.png';


import { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Places extends Component{
    state = {
        users: [],
        searchQuery: ''
    }

    async componentDidMount() {
        const response = await axios('http://localhost:4000/users');
        this.setState({users: response.data});
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const { searchQuery, users } = this.state;
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.address.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div className='fatherContainer'>
                <input
                    type="search"
                    className='searcher'
                    placeholder='Buscar cancha'
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                />
                <div className='placesContainer'>
                    {filteredUsers.map(user => (
                        <Link key={user._id} id='user' to={`/reserve/${user._id}`}>
                            <div className='nameContainer'>
                                <h2 id='title'>{user.name}</h2>
                                <p><img src={locationIcon} alt="locationIcon" width="25px"/> ({user.address})</p>
                            </div>
                            <div className='infoContainer'>
                                <p><img src={timeIcon} alt="timeIcon" width="25px"/> {user.openTime}Hs. - {user.closeTime}Hs.</p>
                                <p><img src={priceIcon} alt="priceIcon" width="25px"/> Precio por hora: ${user.pricing}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
