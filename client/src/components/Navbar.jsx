import React from 'react'

import { NavbarLi, NavbarUl, NavbarWrapper } from './styledComponents/navbar'

export default function Navbar({children, ...restProps}) {
    return (
        <NavbarWrapper {...restProps}>
            {children}
        </NavbarWrapper>
    )
}

Navbar.List = function NavbarList({children, ...restProps}){
    return (
        <NavbarUl {...restProps}>
            {children}
        </NavbarUl>
    )
}

Navbar.Item = function NavbarItem({children, ...restProps}){
    return (
        <NavbarLi {...restProps}>
            {children}
        </NavbarLi>
    )
}

