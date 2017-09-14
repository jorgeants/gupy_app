import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    GupyApp
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/starships'>Spaceships</a></li>
                    <li><a href='#/carregar'>Carregar Dados</a></li>
                </ul>
            </div>
        </div>
    </nav>
)