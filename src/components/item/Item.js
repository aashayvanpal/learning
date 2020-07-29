// Routing url inside a function
import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayList(props) {
    console.log('props', props)
    const { name, id, i, display } = props
    console.log('checkbox value here', display)
    return (
        <tr className="listing-table" key={i}>
            <td className="listing-table">{i + 1}</td>
            <td className="listing-table"><Link to={`/items/show/${id}`}>{name}</Link></td>
            <td className="listing-table">
                <Link to={`/items/edit/${id}`}>
                    <button className="button-color4" onClick={() => {
                        props.updateItem(id)
                    }}>
                        Update
                </button>
                </Link>
            </td>
            <td className="listing-table">


                <input className="checkbox" type="checkbox" checked={display} onChange={() => {
                    console.log('checkbox toggle for menu card clicked!')
                    console.log('name', name)
                    console.log('checkbox value before:', display)
                    console.log('props:', props)
                    props.updateCheckbox(id)

                }} />


            </td>
            <td className="listing-table">
                <button className="button-color5" onClick={() => {
                    props.deleteItem(id)
                }}>Delete</button>
            </td>

        </tr>
    )
}

