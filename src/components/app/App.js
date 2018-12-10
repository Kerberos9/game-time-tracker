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
            games: JSON.parse(localStorage.getItem('games')) || [],
            currentGame: [],
        };
    }
    onGameStart(game) {
        this.setState({ currentGame: game });
    }
    toggleAddingGame() {
        this.setState({ addingGame: !this.state.addingGame, results: [] });
    }

    updateResults(results) {
        this.setState({ results: results });
    }
    onAddGame(game) {
        let games = this.state.games;
        games.push({ ...game, played: 0 });
        this.setState({ games }, this.saveToStorage);
        this.toggleAddingGame();
    }
    updatePlayedGame(data) {
        let otherGames = this.state.games.filter(g => g.id !== data.game.id);
        let game = data.game;
        game.played = data.played;
        let games = [...otherGames, game];
        games.unshift(games.pop());
        this.setState({ games, currentGame: [] }, this.saveToStorage);
    }

    saveToStorage() {
        localStorage.setItem('games', JSON.stringify(this.state.games));
    }

    onGameDelete(id) {
        let otherGames = this.state.games.filter(g => g.id !== id);
        this.setState({ games: otherGames }, this.saveToStorage);
    }

    onCancelTracking() {
        this.setState({ currentGame: [] });
    }

    render() {
        return (
            <div className="app">
                <Header />
                <CurrentGame
                    updatePlayedGame={this.updatePlayedGame.bind(this)}
                    onCancelTracking={this.onCancelTracking.bind(this)}
                    game={this.state.currentGame}
                />
                <div className="game-filter">
                    <input
                        type="text"
                        className="game-filter-input"
                        placeholder="Filter your games"
                    />
                </div>
                <GameSorter />
                <GameList
                    games={this.state.games}
                    onGameStart={this.onGameStart.bind(this)}
                    onGameDelete={this.onGameDelete.bind(this)}
                />
                <GameAdder
                    results={this.state.results}
                    onGetResults={this.updateResults.bind(this)}
                    toggleAddingGame={this.toggleAddingGame.bind(this)}
                    onAddGame={this.onAddGame.bind(this)}
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
