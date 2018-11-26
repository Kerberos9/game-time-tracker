import React, { Component } from 'react';
import './App.css';
import { CurrentGame, Header } from '..';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <CurrentGame />
            </div>
        );
    }
}
export { App };
