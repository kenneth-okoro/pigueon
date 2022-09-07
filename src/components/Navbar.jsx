import logo from '../assets/logo.png';
import { FaGlobe } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <img style={{ height: '30px' }} src={logo} alt='logo' />
      <div>
        <a href='#'>Home</a>
        <a href='#'>About Us</a>
        <a href='#'>Services</a>
        <a href='#'>Testimonial</a>
        <a href='#'>Contact Us</a>
      </div>

      <div className='register'>
        <FaGlobe size={25} />
        <a href='#'>Book a Session</a>
        <a href='#'>Register</a>
      </div>
    </nav>
  );
}

export default Navbar;
