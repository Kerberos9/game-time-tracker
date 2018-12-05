import React, { Component } from 'react';
import './Game.css';
class Game extends Component {
    render() {
        return (
            <div className="game">
                <div>
                    <img
                        src={
                            this.props.gamePicture ||
                            'https://picsum.photos/104/82'
                        }
                        alt={this.props.title + ' picture'}
                        className="game-picture"
                    />
                </div>
                <div className="game-meta">
                    <h1 className="game-title">{this.props.title}</h1>
                    <div className="game-status">
                        <button className="button-start button" onClick={this.props.onGameStart}>Start</button>
                        <div className="game-time">{this.props.played}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Game };