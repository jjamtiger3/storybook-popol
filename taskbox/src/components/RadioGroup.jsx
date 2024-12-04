import styled from 'styled-components';
import Radio from './Radio';
import { useEffect, useRef, useState } from 'react';

const RadioGroupContainer = styled.div`
`;

const RadioGroup = ({ 
  items = [], 
  id = '',
  onChange = () => {}, 
  ...props 
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rgRef = useRef(null);

  useEffect(() => {
    setSelectedIndex(props.selectedIndex);
  }, [props.selectedIndex]);

  const handleChange = (evt, item) => {
    if (onChange) {
        onChange(evt, evt.target.checked, item);
    }
  };

  const handleClick = (evt) => {
    if (props.readOnly) {
      evt.preventDefault();
      evt.stopPropagation();
      return;
    }
  }

  return (
    <RadioGroupContainer
      id={id}
      ref={rgRef}
      onClick={handleClick}
    >
      {items.map((item, index) => (
        <Radio
          key={index}
          label={item.label}
          theme={props.theme}
          name={props.name}
          readOnly={props.readOnly}
          disabled={props.disabled}
          labelPosition={item.labelPosition || 'right'}
          defaultChecked={index === selectedIndex}
          onChange={(e) => handleChange(e, item)}
          value={item.value}
        />
      ))}
    </RadioGroupContainer>
  );
};
export default RadioGroup;