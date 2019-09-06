import React, { Component } from 'react'
import Content from './content'

import '../styles/home.less'

class Home extends Component {
    render() {
        return (
            <div>
                
                <Content />
                {/* <Link to="/about">goto the About Page</Link>
        <Link to="/counter">goto the Counter Page</Link> */}
            </div>
        )
    }
}

export default Home
