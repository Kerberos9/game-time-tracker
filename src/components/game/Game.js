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

  updatePlatTime(hours) {
    let game = this.props.game;
    game.completionist = hours;
    this.props.onGameEdit(game);
  }

  updateGuideLink(link) {
    let game = this.props.game;
    game.guide = link;
    this.props.onGameEdit(game);
  }
  render() {
    return (
      <div className='game'>
        {this.state.deleteActive ? (
          <div className='game-overlay'>
            <span>{`Are you sure you want to delete ${this.props.title}?`}</span>
            <div className='delete-buttons'>
              <button
                className='button delete-button'
                onClick={() => this.props.onGameDelete(this.props.id)}
              >
                Yes
              </button>
              <button
                className='button'
                onClick={() => this.setState({ deleteActive: !this.state.deleteActive })}
              >
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
            {this.props.title} -{' '}
            <input
              type='text'
              className='hours-input'
              onChange={e => this.updatePlatTime(e.target.value)}
              value={this.props.completionist}
            ></input>{' '}
            hours.
            {this.props.game.guide ? (
              <a
                href={this.props.game.guide}
                rel='noopener noreferrer'
                target='_blank'
                className='guide-link'
              >
                Guide
              </a>
            ) : (
              <input
                type='text'
                onChange={e => this.updateGuideLink(e.target.value)}
                className='guide-link-input'
                placeholder='Paste guide link'
              />
            )}
          </h1>

          <div className='game-status'>
            <button
              className='button-start button'
              onClick={() => this.props.onGameStart(this.props.game)}
            >
              Start
            </button>
            <div className='game-info'>
              <span
                className='delete-game'
                onClick={() => this.setState({ deleteActive: !this.state.deleteActive })}
              >
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
