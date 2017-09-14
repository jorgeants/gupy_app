import React from 'react'

import PageHeader from '../template/pageHeader'
import StarshipForm from './starshipForm'
import StarshipList from './starshipList'

export default props => (
    <div>
        <PageHeader name='Starship' small='Cadastro'></PageHeader>
        <StarshipForm />
        <StarshipList />
    </div>
)