import React, { Component } from 'react';
import './GameSorter.css';
class GameSorter extends Component {
    render() {
        return (
            <>
                <span className="game-sorter">
                    Sort: <button className="text-button">Recent</button> |{' '}
                    <button className="text-button">Time</button> |{' '}
                    <button className="text-button">Trophies</button> |
                    <button className="text-button direction-button">
                        ⇡ Asc
                    </button>
                </span>
            </>
        );
    }
}

export { GameSorter };
