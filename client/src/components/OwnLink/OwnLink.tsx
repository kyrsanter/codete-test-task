import React from 'react';
import './ownlink.css'
import { NavLink } from 'react-router-dom';

const OwnLink = (props: any) => <NavLink className='link_style' to={props.href} {...props}>{props.children}</NavLink>

export default OwnLink;