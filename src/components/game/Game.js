import React, { Component } from 'react';
import './Game.css';
import { fromS } from 'hh-mm-ss';
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteActive: false
    };
  }
  toggleDelete() {
    this.setState({ deleteActive: !this.state.deleteActive });
  }

  deleteGame() {
    this.props.onGameDelete(this.props.id);
  }
  render() {
    return (
      <div className='game'>
        {this.state.deleteActive ? (
          <div className='game-overlay'>
            <span>{`Are you sure you want to delete ${this.props.title}?`}</span>
            <div className='delete-buttons'>
              <button className='button delete-button' onClick={this.deleteGame.bind(this)}>
                Yes
              </button>
              <button className='button' onClick={this.toggleDelete.bind(this)}>
                No
              </button>
            </div>
          </div>
        ) : null}
        <div>
          <img
            src={this.props.image || 'https://picsum.photos/104/82'}
            alt={this.props.title + ' picture'}
            className='game-picture'
          />
        </div>
        <div className='game-meta'>
          <h1 className='game-title'>
            {this.props.title} - {this.props.completionist} hours to platinum.
          </h1>
          <div className='game-status'>
            <button
              className='button-start button'
              onClick={() =>
                this.props.onGameStart({
                  id: this.props.id,
                  name: this.props.title,
                  image: this.props.image,
                  played: this.props.played
                })
              }
            >
              Start
            </button>
            <div className='game-info'>
              <span className='delete-game' onClick={this.toggleDelete.bind(this)}>
                X
              </span>
              <div className='game-time'>
                {this.props.played > 0 ? fromS(this.props.played, 'hh:mm:ss') : '00:00:00'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Game };
