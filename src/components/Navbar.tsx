import React from 'react';
import Button from '@mui/material/Button';;

type NavTabProps = {
    href: string;
    pageTitle: string;
}

const NavTab: React.FunctionComponent<NavTabProps> = ({href, pageTitle}) => {
    return(
        <li>
            <a href={href}>
                {pageTitle}
            </a>
        </li>
    )
}

const Navbar: React.FunctionComponent = () => {
    return(
        <nav className="nav">
            <a href="/" className="site-title">Triangle Ventures</a>
            <ul>
                <NavTab href="/founders" pageTitle="Founders" />
                <NavTab href="/mentors" pageTitle="Mentors" />
                <NavTab href="/investors" pageTitle="Investors" />
                <li>
                    <a href="/login">
                        <Button variant="contained">Login</Button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;