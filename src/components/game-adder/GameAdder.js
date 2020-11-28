import React, { Component } from 'react';
import _ from 'lodash';
import { GameResults } from '..';
import './GameAdder.css';
import { backend_api } from '../../config';
class GameAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      loading: false,
      results: [],
      errorString: '',
      addingGame: false
    };
    this.lookUpGames = _.debounce(this.fetchGames, 500);
  }
  fetchGames() {
    this.setState({ loading: true });
    let url = `${backend_api}/getGamesResult?name=${this.state.searchValue}`;
    fetch(url)
      .then(data => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(res => {
        this.props.onGetResults(res);
        this.setState({ loading: false });
      })
      .catch(e => {
        this.setState({
          loading: false,
          errorString: e.message
        });
        this.props.onGetResults([]);
        console.error(e);
      });
  }
  handleInputMethod(e) {
    this.setState({ searchValue: e.target.value });
    this.props.onGetResults([]);
    if (this.state.searchValue) {
      this.lookUpGames();
    }
  }

  render() {
    return (
      <>
        <div
          className='game-adder'
          style={this.props.isAddingGame ? {} : { pointerEvents: 'none' }}
        >
          <div className='game-adder-input'>
            {this.props.results.length && this.props.isAddingGame ? (
              <GameResults results={this.props.results} onAddGame={this.props.onAddGame} />
            ) : null}
            {this.props.isAddingGame ? (
              <>
                <input
                  type='text'
                  className='game-filter-input'
                  placeholder='Add a game'
                  onKeyUp={this.handleInputMethod.bind(this)}
                  ref={input => {
                    if (input) input.focus();
                  }}
                />
              </>
            ) : null}
          </div>
          <div style={{ pointerEvents: 'auto' }}>
            <button className='add-game' onClick={this.props.toggleAddingGame}>
              +
            </button>
          </div>
        </div>
        {this.state.loading ? <progress className='progress-bar' /> : null}
      </>
    );
  }
}

export { GameAdder };
