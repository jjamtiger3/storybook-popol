import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #00653b;
  color: #fff;
  border: none;
  cursor: pointer;
  position: relative;
  line-height: 20px;
  padding: 5px 10px;
  font-size: 14px;
  box-sizing: border-box;
  &.fa-icon-wrapper {
    background-color: transparent;
    color: #111827;
    padding: 8px;
  }
  &.fa-icon-wrapper.primary {
    background: #00653b;
    color: #fff;
  }
  &.fa-icon-wrapper.outline {
    background: #fff;
    color: #00653b;
    border: 1px solid #00653b;
    &:hover {
      background: #00653b;
      color: #fff;
    }
  }
  &.outline {
    background-color: ${(props) => `${props.outlinestyle?.backgroundColor || '#fff'}`};
    color: ${(props) => `${props.outlinestyle?.color || '#00653b'}`};
    border: ${(props) => `${props.outlinestyle?.border || '1px solid #00653b'}`};
    &.tab {
      &:hover {
        background: #fff;
        color: #555;
      }
    }
    &:hover {
      background-color: ${(props) => `${props.outlinestyle?.hover?.backgroundColor || '#10A56E'}`};
      color: ${(props) => `${props.outlinestyle?.hover?.color || '#fff'}`};
      border-color: ${(props) => `${props.outlinestyle?.hover?.backgroundColor && props.outlinestyle?.hover?.backgroundColor}`};
    }
  }
  &.auto {
    width: auto;
  }
  &.full-size {
    width: 100%;
  }
  &.small {
    width: 32px;
    height: 32px;
  }
  &.large {
    width: 120px;
    height: 32px;
  }
  &.larger {
    width: 150px;
    height: 32px;
  }
  &.round {
    border-radius: 20px;
  }
  &.primary {
    background-color: ${(props) => `${props.primarystyle?.backgroundColor || '#00653b'}`};
    color: ${(props) => `${props.primarystyle?.color || '#fff'}`};
    border: ${(props) => `${props.primarystyle?.border || `1px solid ${props.primarystyle?.backgroundColor}` || '1px solid #10A56E'}`};
    color: #fff;
    &.disabled {
      background-color: ${(props) => `${props.primarystyle?.backgroundColor || '#00653b'}`};
      border: ${(props) => `${props.primarystyle?.border || `1px solid ${props.primarystyle?.backgroundColor}` || '1px solid #10A56E'}`};
      opacity: 0.9;
    }
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: ${(props) => `${props.primarystyle?.active?.backgroundColor || '#00653b'}`};
      color: ${(props) => `${props.primarystyle?.active?.color || '#fff'}`};
      border: ${(props) => `${props.primarystyle?.backgroundColor || `1px solid ${props.primarystyle?.backgroundColor}` || '1px solid #10A56E'}`};
    }
  }
  &.grey {
    background-color: #f3f3f4;
    color: #555;
    border: 1px solid #ccc;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: #aaa;
    }
  }
  &.red {
    background-color: #ff0000;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: #cd0000;
    }
  }
  &.blue {
    background-color: #0000ff;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: #0000cd;
    }
  }
  &.warning {
    background-color: #f0ad4e;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: #f0ad4e;
    }
  }
  &.dark {
    background-color: #000;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: #000;
    }
  }
  &.gray {
    background-color: #aaaaaa;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      background-color: #999999;
    }
  }
  &:hover {
    opacity: 0.8;
  }
  &.readonly {
    background: #c8c8c8;
    border: #c8c8c8;
    color: #fff;
    cursor: default;
    &:hover {
      opacity: 1;
      background: #c8c8c8;
      border: #c8c8c8;
      color: #fff;
    }
    &:active {
      background: #c8c8c8;
    }
  }
  &.disabled {
    background: #e9e9e9;
    border: 1px solid #e9e9e9;
    color: #fff;
    pointer-events: none;
    user-select: none;
    &:hover {
      opacity: 1;
    }
  }
  &.hidden {
    display: none;
  }
  .fa-icon {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
/**
 * Primary UI component for user interaction
 */
const Button = ({ 
  label = 'Button', 
  faIcon = null,
  iconPosition = 'left',
  size='auto',
  round = false,
  ...props 
}) => {
  const handleClick = (evt, props) => {
    if (props.readOnly) {
      evt.preventDefault();
      evt.stopPropagation();
      return;
    }
    props.onClick && props.onClick();
  }
  return (
    <StyledButton 
      className={[
        'button', 
        props.theme, 
        props.readOnly ? 'readonly' : '', 
        props.disabled ? 'disabled' : '',
        round ? 'round' : '',
        size ? size : '',
        iconPosition ? iconPosition : '',
        faIcon ? 'fa-icon-wrapper' : '',
        props.outline ? 'outline' : '',
        props.primary ? 'primary' : '',
        props.className
        ].join(' ')}
      style={props.style}
      primarystyle={props.primarystyle}
      outlinestyle={props.outlinestyle}
      disabled={props.disabled}
      onClick={(e) => handleClick(e, props)}
    >
      {
        iconPosition !== 'right' && faIcon &&
        <FontAwesomeIcon className={'fa-icon'} icon={faIcon} />
      }
      {label}
      {
        iconPosition === 'right' && faIcon &&
        <FontAwesomeIcon className={'fa-icon'} icon={faIcon} />
      }
    </StyledButton>
  );
};
export default Button;