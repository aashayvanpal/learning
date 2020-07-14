// Routing url inside a function
import React from 'react'
import { Link } from 'react-router-dom'
// {/* <td style={{ "border": "2px solid black" }}>{item.name}</td> */ }

export default function DisplayList(props) {
    console.log('props', props)
    const { name, id, i,display } = props
    console.log('checkbox value here',display)
    return (
        <tr className="listing-table" key={i}>
            <td className="listing-table">{i + 1}</td>
            <td className="listing-table"><Link to={`/items/show/${id}`}>{name}</Link></td>
            <td className="listing-table">
                <button onClick={() => {
                    props.updateItem(id)
                }}>
                    <Link to={`/items/edit/${id}`}>Update</Link>
                </button>
            </td>
            <td className="listing-table">
                
                <input type="checkbox" checked={display}/>
            </td>
            <td className="listing-table">
                <button onClick={() => {
                    props.deleteItem(id)
                }}>Delete</button>
            </td>

        </tr>
    )
}

