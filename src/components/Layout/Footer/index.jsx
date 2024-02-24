import React from 'react';
import { Icon } from 'semantic-ui-react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div id="footer">
                <div id="legals">
                    <span><a href="/legal">Mentions légales</a></span>
                    <span> \ </span>
                    <span><a href="#cookies">Gérer les cookies</a></span>
                </div>
                <div id="credits">Made with <Icon name="heart outline"/> by <a href="https://bit.ly/maelleeveno" target="_blank" rel="noreferrer">ME</a> &copy; {(new Date().getFullYear())}</div>
            </div>
        </footer>
    );
}

export default Footer;