import React from 'react';
import Icon from './Icon';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Styles from './Icon.module.scss';
import * as icons from './svg';


export default {
  component: Icon,
  title: 'components|Icon/Icon',
  decorators: [withKnobs]
};

export const icon = () => {
  const addonIcons = select(
    'Icon',
    Object.keys(icons),
    'exit'
  );
  const addonSize = text('Size', '10rem');
  const addonColor = text('Color', 'blue');
  return (
    <Icon
      icon={addonIcons}
      size={addonSize}
      color={addonColor}
    />
  );
}
icon.story = {
  name: 'Default'
};

export const customSize = () => <Icon icon="heart" size="4rem" />;

export const customColor = () => <Icon icon="heart" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="heart" css={{ color: 'red', width: '4rem' }} />
);

export const listOfIcons = () => {
  return (
    <ul className={Styles.StyledUl}>
      {Object.keys(icons).map(icon => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};