import React, { Component } from 'react';


export default class ItemList extends Component {
    render() {
        return (
            <div>
                <div style={{ "backgroundColor": "red" }}>
                    <h1>Approve orders :</h1>

                    <table>
                        <th>
                            <td>Sl no</td>
                            <td>Name</td>
                            <td>Update</td>
                            <td>Date</td>
                            <td>Remove</td>
                            <td>Approve</td>
                        </th>
                    </table>
                </div>

                <div style={{ "backgroundColor": "green" }}>
                    <h1>Listing  orders :</h1>
                    <input placeholder="Search Order" />
                    <button>Search</button>

                    <button>Add new Order</button>
                    <table>
                        <th>
                            <td>Sl no</td>
                            <td>Name</td>
                            <td>Update</td>
                            <td>Date</td>
                            <td>Remove</td>
                            <td>Completed</td>
                        </th>
                    </table>
                </div>

                <div style={{ "backgroundColor": "yellow" }}>
                    <h1>Listing completed orders :</h1>
                    <input placeholder="Search Order" />
                    <button>Search</button>
                    <table>
                        <th>
                            <td>Sl no</td>
                            <td>Name</td>
                            <td>Date</td>
                            <td>Remove</td>
                        </th>
                    </table>
                </div>
            </div>
        );
    }
}
