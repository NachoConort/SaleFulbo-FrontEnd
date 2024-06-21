import '../styles/places.css'

import { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Places extends Component{
    state = {
        users: []
    }

    async componentDidMount() {
        const response = await axios('http://localhost:4000/users');
        this.setState({users: response.data});
    }

    render() {
        return(
            <div className='placesContainer'>
                {
                    this.state.users.map(user => (
                    <Link key={user._id} className='user' to={`/reserve/${user._id}`}>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.address}
                        </div>
                        <div>
                            {user.openTime}
                        </div>
                        <div>
                            {user.closeTime}
                        </div>
                        <div>
                            {user.pricing}
                        </div>
                    </Link>)
                    )
                }
            </div>
        )
    }
}
