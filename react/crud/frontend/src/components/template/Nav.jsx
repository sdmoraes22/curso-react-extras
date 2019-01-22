import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem label="Início" icon="home" link="/"/>
            <NavItem label="Início" icon="users" link="/users"/>
        </nav>
    </aside>