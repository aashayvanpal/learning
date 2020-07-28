import React, { Component } from 'react';
import Menu from '../components/Menu.js'


export default class ItemList extends Component {
    render() {
        return (
            <div style={{
                "backgroundColor": "#DBC268",
                "padding": "60px",
                "margin-top": "-50px",
                "width": "950px"
            }}>

                <Menu />
            </div>
        );
    }
}
