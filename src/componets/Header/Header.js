import { React } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import twitter_img from '../../assets/twitter.png'
import discord_img from '../../assets/discord.png'

function SocialMedia() {
    return (
        <div className='btns'>
            <button className="social-btn"><img src={discord_img}/></button>
            <button className="social-btn"><img src={twitter_img}/></button>
        </div>
    )
}

function Logo(){
    return(
        <div className='logo'>
            <img src={logo}></img>
            <p>new<br />connection</p>
        </div>
        
    )
}

function Header() {
    return (
        <header>
            <nav className='header'>
                <Logo />
                <SocialMedia />
            </nav>
        </header>
    )
}

export default Header;