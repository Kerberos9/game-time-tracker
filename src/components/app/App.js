import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import { CurrentGame, GameAdder, GameList, GameSorter, Header } from '..';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingGame: false,
            results: [],
        };
    }
    onGameStart() {
        console.log('Game starting');
    }
    toggleAddingGame() {
        this.setState({ addingGame: !this.state.addingGame, results: [] });
    }

    updateResults(results) {
        this.setState({ results: results });
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
                <GameList onGameStart={this.onGameStart.bind(this)} />
                <GameAdder
                    results={this.state.results}
                    onGetResults={this.updateResults.bind(this)}
                    toggleAddingGame={this.toggleAddingGame.bind(this)}
                    isAddingGame={this.state.addingGame}
                />

                {this.state.addingGame ? (
                    <>
                        <div
                            className="overlay"
                            onClick={this.toggleAddingGame.bind(this)}
                        />

                    </>
                ) : null}
            </div>
        );
    }
}
export { App };
