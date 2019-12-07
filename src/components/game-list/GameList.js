import React, { Component } from 'react';
import './GameList.css';
import { Game } from '..';

class GameList extends Component {
    render() {
        return (
            <div className="game-list">
                {this.props.games.map(game => (
                    <Game
                        key={game.id}
                        id={game.id}
                        title={game.name}
                        played={game.played}
                        image={game.image}
                        completionist={game.completionist}
                        onGameStart={this.props.onGameStart}
                        onGameDelete={this.props.onGameDelete}
                    />
                ))}
            </div>
        );
    }
}

export { GameList };
