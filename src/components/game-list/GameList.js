import React, { Component } from 'react';
import './GameList.css';
import { Game } from '..';

class GameList extends Component {
  render() {
    return (
      <div className='game-list'>
        {this.props.games
          .filter(g => g.name.includes(this.props.filter))
          .map(game => (
            <Game
              key={game.id}
              game={game}
              id={game.id}
              title={game.name}
              played={game.played}
              image={game.image}
              completionist={game.completionist}
              onGameStart={this.props.onGameStart}
              onGameDelete={this.props.onGameDelete}
              onPlatEdit={this.props.onPlatEdit}
              onGuideEdit={this.props.onGuideEdit}
            />
          ))}
      </div>
    );
  }
}

export { GameList };
