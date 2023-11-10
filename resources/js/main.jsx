import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloReact from "@/components/HelloReact.jsx";
import InfoSideBar from './components/InfoSideBar.jsx';

function Main() {

    return (
        <div>
            {/*<Header />*/}
            < InfoSideBar />

            <main className="main">
                {/*<HelloReact />*/}
            </main>

            {/*<Footer />*/}
        </div>
    );
}

export default Main
