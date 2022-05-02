import airBnbLogo from '../images/airbnb-logo.png';

function Navbar() {
    return (
        <div className='navbar'>
            <img src={airBnbLogo} alt='Airbnb Logo' className='airbnb-logo'/>
        </div>
    )
}

export default Navbar;