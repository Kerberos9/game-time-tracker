import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import { CurrentGame, GameList, GameSorter, Header } from '..';

class App extends Component {
    onGameStart(){
        console.log('Game starting');
    }
    render() {
        return (
            <div className="app">
                <Header />
                <CurrentGame />
                <div className="game-filter">
                    <input
                        type="text"
                        className="game-filter-input"
                        placeholder="Filter your games"
                    />
                </div>
                <GameSorter />
                <GameList onGameStart={this.onGameStart.bind(this)}/>
            </div>
        );
    }
}
export { App };
