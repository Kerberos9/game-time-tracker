import React, { Component } from 'react';
import './GameResults.css';
import { GameResult } from '../game-result/GameResult';
class GameResults extends Component {
  render() {
    let results =
      this.props.results
        .map(r => (
          <GameResult
            onAddGame={this.props.onAddGame}
            imageUrl={r.imageUrl}
            name={r.name}
            key={r.id}
            id={r.id}
            completionist={r.gameplayCompletionist}
          />
        ))
        .reverse() || [];
    return (
      <>
        <ul className='game-results'>{results}</ul>
      </>
    );
  }
}

export { GameResults };
