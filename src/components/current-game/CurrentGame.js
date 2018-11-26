import React, { Component } from 'react';
import './CurrentGame.css';
class CurrentGame extends Component {
    render() {
        return (
            <div className="current-game">
                <div className="current-game-header">
                    <span className="title">Title</span>
                    <span className="total-time">Total time</span>
                </div>
                <span className="running-time">Running time</span>
                <div className="buttons">
                    <button className="button finish">Finish</button>
                    <button className="button pause">Pause</button>
                    <button className="button cancel">Cancel</button>
                </div>
                <span className="logs">Logs</span>
            </div>
        );
    }
}

export { CurrentGame };
