import React from 'react';
import PropTypes from 'prop-types';
import './navLinksList.css';

const NavLinksListComponent = props => {
  const styles = { ...props.styles };
  return (
    <ul className="nav-links-component" style={styles}>
      {props.links.map(link => {
        return (
          <li className="nav-link-item" style={{...link.styles}} key={link.id}>
          <a className="nav-link" href={link.href}>
            {link.iconRender() || null }<span className='link-text'>{link.text}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

NavLinksListComponent.propTypes = {
  styles: PropTypes.object,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string,
      styles: PropTypes.object
    })
  ).isRequired,
  iconRender: PropTypes.func
};

export default NavLinksListComponent;
