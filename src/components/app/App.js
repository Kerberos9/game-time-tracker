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
            games: JSON.parse(localStorage.getItem('games')) || [
                {
                    id: '36936',
                    name: 'Nioh',
                    image:
                        'https://howlongtobeat.com/gameimages/36936_Nioh.jpg',
                    played: 0,
                    lastPlayed: 0,
                },
                {
                    id: '57351',
                    name: 'FIFA 19',
                    image:
                        'https://howlongtobeat.com/gameimages/57351_Fifa_19.jpg',
                    played: 0,
                    lastPlayed: 0,
                },
                {
                    id: '31388',
                    name: 'Detroit: Become Human',
                    image:
                        'https://howlongtobeat.com/gameimages/Detroit_Become_Human.jpg',
                    played: 0,
                    lastPlayed: 0,
                },
            ],
            currentGame: [],
            sortType: localStorage.getItem('sortType') || 'recent',
            sortDirection: localStorage.getItem('sortDirection') || 'desc',
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
        games.push({ ...game, played: 0, lastPlayed: 0 });
        this.setState({ games }, this.prepareGameList);
        this.toggleAddingGame();
    }

    updatePlayedGame(data) {
        let otherGames = this.state.games.filter(g => g.id !== data.game.id);
        let game = data.game;
        game.played = data.played;
        game.lastPlayed = Date.now();
        let games = [...otherGames, game];
        this.setState({ games, currentGame: [] }, this.prepareGameList);
    }

    saveToStorage() {
        localStorage.setItem('games', JSON.stringify(this.state.games));
        localStorage.setItem('sortDirection', this.state.sortDirection);
        localStorage.setItem('sortType', this.state.sortType);
    }

    onGameDelete(id) {
        let otherGames = this.state.games.filter(g => g.id !== id);
        this.setState({ games: otherGames }, this.prepareGameList);
    }

    onCancelTracking() {
        this.setState({ currentGame: [] });
    }

    onSortDirectionChange() {
        this.state.sortDirection === 'asc'
            ? this.setState({ sortDirection: 'desc' }, this.prepareGameList)
            : this.setState({ sortDirection: 'asc' }, this.prepareGameList);
    }
    onSortTypeChange(sortType) {
        this.setState({ sortType }, this.prepareGameList);
    }
    prepareGameList() {
        let games = this.state.games.sort(this.getSortingFunction());
        console.log(games);
        this.setState({ games }, this.saveToStorage);
    }

    getSortingFunction() {
        switch (this.state.sortType) {
            case 'completionist':
                return this.state.sortDirection === 'asc'
                    ? (a, b) => a.completionist - b.completionist
                    : (a, b) => b.completionist - a.completionist;
            case 'time':
                return this.state.sortDirection === 'asc'
                    ? (a, b) => a.played - b.played
                    : (a, b) => b.played - a.played;
            case 'title':
                return this.state.sortDirection === 'asc'
                    ? (a, b) => (a.name > b.name ? 1 : -1)
                    : (a, b) => (b.name > a.name ? 1 : -1);
            case 'recent':
            default:
                return this.state.sortDirection === 'asc'
                    ? (a, b) => a.lastPlayed - b.lastPlayed
                    : (a, b) => b.lastPlayed - a.lastPlayed;
        }
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
                <GameSorter
                    sortDirection={this.state.sortDirection}
                    sortType={this.state.sortType}
                    onSortDirectionChange={this.onSortDirectionChange.bind(
                        this,
                    )}
                    onSortTypeChange={this.onSortTypeChange.bind(this)}
                />
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
