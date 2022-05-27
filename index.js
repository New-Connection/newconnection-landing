import React from 'react';
import ReactDOM from "react-dom"
import Header  from 'Header'

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

// function Header() {
//     return (
//         <header>
//             <nav className='header'>
//                 <h1>New Connection</h1>
//                 <SocialMedia />
//             </nav>
//         </header>
//     )
// }

function Footer() {
    return (
        <footer>
            <small>contact@newconnection.xyz</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Multichain DAO voting in two clicks</h1>
            <button>Comming Soon ✨</button>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))