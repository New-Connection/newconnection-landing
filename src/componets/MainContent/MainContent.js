import { React } from 'react'
import './MainContent.css';
import TextAnimation from "./TextAnimation";

function MainContent() {
    return (
        <div className="main-content">
            <h1>MULTICHAIN DAO<br />SOLUTION TO CREATE<br /><span className="text-transition"><TextAnimation /></span></h1>
            <button>Comming Soon ✨</button>    
        </div>
    )
}

export default MainContent;