import React, {Component} from 'react';
import './App.css';
import AppHeader from "./components/AppHeader";
import ContactList from "./components/ContactList";
import Counter from "./components/Counter";

class App extends Component {

    render() {
        return (
            <div>
                <AppHeader/>
                <main className="ui main text container">
                    <Counter/>
                    <ContactList/>
                </main>

            </div>
        );
    }
}

export default App;
