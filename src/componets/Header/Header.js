import { React } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import twitter_img from '../../assets/twitter.png'
import discord_img from '../../assets/discord.png'
import discord_not_ready from '../../assets/discord-not-ready.png'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
const TwitterURL = 'https://twitter.com/NewConnectionX'

function SocialMedia() {
    return (
        <div className='btns'>
            <button onClick={()=> openInNewTab(TwitterURL)} className="social-btn"><img src={twitter_img}/></button>
            <button className="social-btn btn-not-ready"><img src={discord_not_ready}/></button>
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