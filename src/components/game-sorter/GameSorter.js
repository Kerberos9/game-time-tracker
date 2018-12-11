import React, { Component } from 'react';
import './GameSorter.css';
class GameSorter extends Component {
    render() {
        return (
            <>
                <span className="game-sorter">
                    Sort:{' '}
                    <button
                        className="text-button"
                        onClick={() => this.props.onSortTypeChange('recent')}
                    >
                        Recent
                    </button>{' '}
                    |{' '}
                    <button
                        className="text-button"
                        onClick={() => this.props.onSortTypeChange('time')}
                    >
                        Time
                    </button>{' '}
                    |{' '}
                    <button
                        className="text-button"
                        onClick={() => this.props.onSortTypeChange('title')}
                    >
                        Title
                    </button>{' '}
                    |{' '}
                    {this.props.sortDirection === 'asc' ? (
                        <button
                            className="text-button direction-button-asc"
                            onClick={this.props.onSortDirectionChange}
                        >
                            ⇡ Asc
                        </button>
                    ) : (
                        <button
                            className="text-button direction-button-desc"
                            onClick={this.props.onSortDirectionChange}
                        >
                            ⇣ Desc
                        </button>
                    )}
                </span>
            </>
        );
    }
}

export { GameSorter };
