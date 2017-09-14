import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { remove } from './starshipActions'

const SpaceshipList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(starship => (
            <tr key={starship.id}>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.passengers}</td>
                <td>
                    <IconButton style='default' icon='edit'></IconButton>
                    <IconButton style='danger' icon='trash-o' 
                        onClick={() => props.remove(starship)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Modelo</th>
                    <th>Quantidade de passageiros</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.starship.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SpaceshipList)