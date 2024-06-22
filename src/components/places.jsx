import '../styles/places.css'

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
                        <Link key={user._id} className='user' to={`/reserve/${user._id}`}>
                            <div>
                                <h2>{user.name}</h2>
                            </div>
                            <div>
                                {user.address}
                            </div>
                            <div>
                                <h4>{user.openTime} - {user.closeTime}</h4>
                            </div>
                            <div>
                                <h4>Precio por hora: ${user.pricing}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
