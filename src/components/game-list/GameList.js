import React, { Component } from 'react';
import './GameList.css';
import { Game } from '..';

class GameList extends Component {
    render() {
        return (
            <div className="game-list">
                <Game
                    title={'Detroit: Become Human'}
                    played={'10h 23m'}
                    onGameStart={this.props.onGameStart}
                />
                <Game
                    title={'Nioh: Complete Edition'}
                    played={'10h 23m'}
                    onGameStart={this.props.onGameStart}
                />
                <Game
                    title={'Binding of Isaac: Afterbirth+'}
                    played={'10h 23m'}
                    onGameStart={this.props.onGameStart}
                />
                <Game
                    title={'Life is Strange: Before the Storm'}
                    played={'10h 23m'}
                    onGameStart={this.props.onGameStart}
                />
                <Game
                    title={'God of War'}
                    played={'10h 23m'}
                    onGameStart={this.props.onGameStart}
                />
            </div>
        );
    }
}

export { GameList };
