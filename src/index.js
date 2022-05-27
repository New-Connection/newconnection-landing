import { React }  from 'react';
import ReactDOM from "react-dom";
import { Header }  from './componets/';
import './index.css';

function Footer() {
    return (
        <footer className="footer">
            contact@newconnection.xyz
        </footer>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Multichain<br />DAO voting<br />in two clicks</h1>
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