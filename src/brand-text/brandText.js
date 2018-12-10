import React from 'react';
import PropTypes from 'prop-types';
import './brandText.css';

const BrandTextComponent = props => {
  const styles = { ...props.styles };
  const href = props.link || '#';
  return (
    <a className="brand-text-component" style={styles} href={href}>
      {props.words.map(word => {
        return (
          <span className="brand-word" style={word.styles} key={word.id}>
            {word.text}
          </span>
        );
      })}
    </a>
  );
};

BrandTextComponent.propTypes = {
  styles: PropTypes.object,
  link: PropTypes.string,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      styles: PropTypes.object
    })
  ).isRequired
};

export default BrandTextComponent;
