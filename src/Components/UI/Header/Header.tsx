import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import MenuIcon from '@material-ui/icons/Menu';

import './Header.scss';
import { useAccessToken } from '../../../hooks';

type HeaderProps = {
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Header: React.FC<HeaderProps> = (props) => {
    const [isFixed, setIsFixed] = useState(false);
    const { token, setToken } = useAccessToken();
    const authorized = token !== '';
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const ScrollHandle = function (e: Event) {
            if (window.pageYOffset >= 300) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        window.addEventListener("scroll", ScrollHandle, { passive: true });

        return () => {
            window.removeEventListener("scroll", ScrollHandle);
        }
    }, []);

    const navClasses = `${(isFixed ? "fixed-header GorkaHeaderNav" : "GorkaHeaderNav")}`;
    const titleClasses = `site-title ${(isFixed ? "visible-title" : "")}`;

    function checkLogin() {
        if (authorized)
            return <span className='logPerson'>
                <li className="ork-menu__dakka"><Link to="/order"><ShoppingCartIcon className="cart" fontSize='large' /></Link></li>
                <li className="ork-menu__dakka"><Link to="/person"><PersonIcon className="person" fontSize='large' /></Link></li>
                <li onClick={exit} className="ork-menu__dakka">Выйти</li>
            </span>;

        return <span className="log ork-menu__dakka"><li><Link to="/login">Вход/Регистрация</Link></li></span>;
    }

    const exit = () => {
        setToken('');
    }

    function checkLogin2() {
        if (authorized)
            return <>
            <div onClick={exit} className="mobile-link exit"><ListItem>Выйти</ListItem></div>
            <span className='logPersonTachilina'>
                <Link className="mobile-link" to="/order"><ListItem button><ShoppingCartIcon className="cart" fontSize='large' /></ListItem></Link>
                <Link className="mobile-link" to="/person"><ListItem button><PersonIcon className="person" fontSize='large' /></ListItem></Link>
            </span></>;

        return <Link className="mobile-link" to="/login"><ListItem button><li>Вход/Регистрация</li></ListItem></Link>;
    }

    return (
        <header>
            <div className="header-banner-Morka">
                <h1>GuitarShop</h1>
            </div>
            <div className="clear"></div>
            <nav className={navClasses}>
                <div className={titleClasses}>GuitarShop</div>
                <ul className="ork-menu">
                    <li className="ork-menu__dakka"><Link to="/">Главная</Link></li>
                    <li className="ork-menu__dakka"><Link to="/goods">Товары</Link></li>
                    <li className="ork-menu__dakka"><Link to="/guitartypes">Категории</Link></li>
                    <li className="ork-menu__dakka"><Link to="/delivery-and-pay">Доставка и оплата</Link></li>
                    {checkLogin()}
                    <IconButton className="ork-tickalo" color="default" onClick={() => setMenuOpen(true)}>
                        <MenuIcon className="mobile-toggler" />
                    </IconButton>
                </ul>
            </nav>

            <div>
                <Dialog classes={{ root: "ork-menu-beck" }} TransitionComponent={Transition} color="secondary" fullScreen open={menuOpen} onClose={() => setMenuOpen(false)}>
                    <AppBar>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={() => setMenuOpen(false)} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <List className="mobile-menu__list">
                        <Link className="mobile-link" to="/"><ListItem button>Главная</ListItem></Link>
                        <Link className="mobile-link" to="/goods"><ListItem button>Товары</ListItem></Link>
                        <Link className="mobile-link" to="/guitartypes"><ListItem button>Категории</ListItem></Link>
                        <Link className="mobile-link" to="/delivery-and-pay"><ListItem button>Доставка и оплата</ListItem></Link>
                        {checkLogin2()}
                    </List>
                </Dialog>
            </div>
        </header>
    );
}