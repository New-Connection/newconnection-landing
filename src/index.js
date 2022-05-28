import { React }  from 'react';
import ReactDOM from "react-dom";
import { Header, Footer, MainContent }  from './componets/';
import './index.css';

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