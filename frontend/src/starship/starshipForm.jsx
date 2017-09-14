import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeName, search, clear } from './starshipActions'

class SpaceShipForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { clear, search, name } = this.props
        if (e.key === 'Enter') {
            search()
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { search, name } = this.props
        return (
            <div role='form' className='starshipForm'>
                <Grid cols='12 9 10'>
                    <input id='name' className='form-control'
                        placeholder='Busque pelo nome'
                        onChange={this.props.changeName}
                        onKeyUp={this.keyHandler}
                        value={this.props.name}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={search}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({name: state.starship.name})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeName, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SpaceShipForm)