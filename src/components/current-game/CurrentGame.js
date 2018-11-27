import React, { Component } from 'react';
import './CurrentGame.css';
class CurrentGame extends Component {
    render() {
        return (
            <div className="current-game-block">
                <div className="current-game">
                    <div className="current-game-header">
                        <span className="title">
                            {this.props.title || 'Select a game!'}
                        </span>
                    </div>
                    {this.props.id ? (
                        <>
                            <span className="running-time">00:00:00</span>
                            <div className="buttons">
                                <button className="button finish">
                                    Finish
                                </button>
                                <button className="button pause">Pause</button>
                                <button className="button cancel">
                                    Cancel
                                </button>
                            </div>
                            <span className="logs">View Logs</span>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        );
    }
}

export { CurrentGame };
