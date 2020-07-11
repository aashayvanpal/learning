// Routing url inside a function
import React from 'react'
// {/* <td style={{ "border": "2px solid black" }}>{item.name}</td> */ }

export default function DisplayList(props) {
    console.log('props', props)
    const { name, id, i } = props
    return (
        <tr key={i}>
            <td>{name}</td>
            <td>
                <button onClick={() => {
                    props.deleteItem(id)
                }}>Delete</button>
            </td>
            <td>{name}</td>
            <td>{name}</td>
        </tr>
    )
}

