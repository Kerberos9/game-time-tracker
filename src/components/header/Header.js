import React, { Component } from 'react';
import { LoginSection } from '..';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div>Welcome, stranger.</div>
                    <LoginSection />
                </div>

            </>
        );
    }
}

export { Header };
