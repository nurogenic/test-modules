import React, { Component } from 'react'
import style from './style'

/**
 * View can be React/Angular/Vue
 * This is the only place the module will reference a library.
 * If need be this file can be different from the admin/storefront so the models are the same.
 */
class View extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 1}
    }

    click() {
        this.setState({
            count: this.state.count+1
        })
        this.props.model.setProp('text', `Updated ${this.state.count} Times`)
    }

    render() {
        return (
            <div style={style} onClick={this.click.bind(this)}>
                {this.props.model.getProp('text')}
            </div>
        )
    }
}

export default View