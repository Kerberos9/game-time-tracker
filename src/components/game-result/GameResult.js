import React, { Component } from 'react';
import './GameResult.css';
class GameResult extends Component {
    render() {
        return (
            <>
                <li className="game-result">
                    <img src={this.props.imageUrl} />
                    <div className="result-name">{this.props.name}</div>
                </li>
            </>
        );
    }
}

export { GameResult };
