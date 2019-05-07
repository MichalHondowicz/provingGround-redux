import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader";
import ContactList from "./components/ContactList";

function App() {
    return (
        <div>
            <AppHeader/>
            <main className="ui main text container">
                <ContactList/>
            </main>
        </div>
    );
}

export default App;
