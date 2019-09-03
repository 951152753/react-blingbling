import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
    <div>
        <p>This is the About Page.</p>
        <Link to="/home">goto the Home Page</Link>
        <br />
        <Link to="/counter">goto the Counter Page</Link>
    </div>
)

export default About
