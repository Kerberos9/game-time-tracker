import React, { Component } from 'react';
import './CurrentGame.css';
import { fromS } from 'hh-mm-ss';
class CurrentGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      played: this.props.game.played || 0,
      isPaused: false,
      intervalID: null
    };
  }

  incrementTimer() {
    let played = this.state.played;
    this.setState({ played: played + 1 });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.game.id && prevProps.game.id !== this.props.game.id) {
      this.setState({ played: this.props.game.played });
      this.startInterval();
    }
  }

  startInterval() {
    if (this.state.intervalID) {
      clearInterval(this.state.intervalID);
    }
    let intervalID = setInterval(this.incrementTimer.bind(this), 1000);
    this.setState({
      isPaused: false,
      intervalID
    });
  }

  finishTracking() {
    clearInterval(this.state.intervalID);
    let game = this.props.game;
    game.played = this.state.played;
    game.lastPlayed = Date.now();
    this.props.onGameEdit(game);
  }

  pauseTracking() {
    if (this.state.isPaused) {
      this.startInterval();
    } else {
      clearInterval(this.state.intervalID);
      this.setState({ intervalID: null, isPaused: true });
    }
  }

  cancelTracking() {
    clearInterval(this.state.intervalID);
    this.props.onCancelTracking();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }
  render() {
    return (
      <div className='current-game-block'>
        <div className='current-game'>
          <div className='current-game-header'>
            <span className='title'>{this.props.game.name || 'Select a game!'}</span>
          </div>
          {this.props.game.id ? (
            <div>
              <span className='running-time'>
                {this.state.played > 0 ? fromS(this.state.played, 'hh:mm:ss') : '00:00:00'}
              </span>
              <div className='buttons'>
                <button className='button finish' onClick={this.finishTracking.bind(this)}>
                  Finish
                </button>
                <button
                  className={`button ${this.state.isPaused ? 'paused' : 'resumed'}`}
                  onClick={this.pauseTracking.bind(this)}
                >
                  {this.state.isPaused ? 'Resume' : 'Pause'}
                </button>
                <button className='button cancel' onClick={this.cancelTracking.bind(this)}>
                  Cancel
                </button>
              </div>
              <span className='logs'>View Logs</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export { CurrentGame };
