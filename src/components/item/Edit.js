import React from 'react'

export default class EditItem extends React.Component {
    constructor() {
        super()
        this.item = {

        }
    }

    componentDidMount() {
        console.log('this.props:', this.props)
    }

    render() {
        return(
            <h1>this is the render</h1>
        )
        
    }
}