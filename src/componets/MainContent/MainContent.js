import { React } from 'react'
import './MainContent.css';
import TextAnimation from "./TextAnimation";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const NCAPP = 'https://app.newconnection.xyz/'

function MainContent() {
    return (
        <div className="main-content">
            <h1>MULTICHAIN DAO<br />SOLUTION TO CREATE<br /><span className="text-transition"><TextAnimation /></span></h1>
            <button onClick={()=> openInNewTab(NCAPP)}>Enter App ✨</button>    
        </div>
    )
}

export default MainContent;