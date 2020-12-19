import React from 'react';
import { Icon } from 'semantic-ui-react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div id="footer">
                <div>Made with <Icon name="heart outline"/>by <a href="https://www.maelleeveno.fr" target="_blank" rel="noreferrer">M.E.</a> &copy; {(new Date().getFullYear())}</div>
            </div>
        </footer>
    );
}

export default Footer;