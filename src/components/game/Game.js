import React, { Component } from 'react';
import './Game.css';
import { fromS } from 'hh-mm-ss';
class Game extends Component {
    render() {
        return (
            <div className="game">
                <div>
                    <img
                        src={this.props.image || 'https://picsum.photos/104/82'}
                        alt={this.props.title + ' picture'}
                        className="game-picture"
                    />
                </div>
                <div className="game-meta">
                    <h1 className="game-title">{this.props.title}</h1>
                    <div className="game-status">
                        <button
                            className="button-start button"
                            onClick={() =>
                                this.props.onGameStart({
                                    id: this.props.id,
                                    name: this.props.title,
                                    image: this.props.image,
                                    played: this.props.played,
                                })
                            }
                        >
                            Start
                        </button>
                        <div className="game-info">
                            <span
                                className="delete-game"
                                style={{ cursor: 'pointer' }}
                                onClick={() =>
                                    this.props.onGameDelete(this.props.id)
                                }
                            >
                                Delete
                            </span>
                            <div className="game-time">
                                {this.props.played > 0
                                    ? fromS(this.props.played, 'hh:mm:ss')
                                    : '00:00:00'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Game };
