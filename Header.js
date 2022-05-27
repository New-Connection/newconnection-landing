import { React } from 'react';

function SocialMedia() {
    return (
        <div className='btns'>
            <button className="social-btn">Discord</button>
            <button className="social-btn">Twitter</button>
        </div>
    )
}

function Logo(){
    return(
        <div className='logo'>
            <img src=""></img>
            <h1>New Connection</h1>
        </div>
        
    )
}

function Header() {
    return (
        <header>
            <nav className='header'>
                <h1>New Connection</h1>
                <SocialMedia />
            </nav>
        </header>
    )
}

export default Header;