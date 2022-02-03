import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <p>About</p>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/service">Service</Link></p>
        </div>
    );
}

export default About;
