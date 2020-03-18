import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Trang chu</h1>
            </div>
        );
    }
}

export default connect()(HomePage);
