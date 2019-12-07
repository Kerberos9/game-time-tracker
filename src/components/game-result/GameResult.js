import React, { Component } from 'react';
import './GameResult.css';
class GameResult extends Component {
    render() {
        return (
            <>
                <li
                    className="game-result"
                    onClick={() =>
                        this.props.onAddGame({
                            id: this.props.id,
                            name: this.props.name,
                            image: this.props.imageUrl,
                            completionist: this.props.completionist,
                        })
                    }
                >
                    <img alt={this.props.name} src={this.props.imageUrl} />
                    <div className="result-name">{this.props.name}</div>
                </li>
            </>
        );
    }
}

export { GameResult };
