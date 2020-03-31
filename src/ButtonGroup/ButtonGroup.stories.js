import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import { withKnobs, radios, boolean, object } from '@storybook/addon-knobs';

export default {
  title: 'components|Button/ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs]
};

export const buttonGroup = () => {
  const addonDirection = radios(
    'direction',
    { Row: 'row', Column: 'column' },
    'row'
  );
  const addonRightAlign = boolean('rightAlign', false);
  const addonStyle = object('Style', {
    gap: "10em"
  });

  return (
    <ButtonGroup
      direction={addonDirection}
      rightAlign={addonRightAlign}
      style={addonStyle}
    >
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default'
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};

export const customGap = () => {
  const style = {
    marginLeft: "10em",
  }
  return (
    <ButtonGroup style={style}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  const style = {
    marginTop: "10em",
  }
  return (
    <ButtonGroup direction="column" style={style}>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};