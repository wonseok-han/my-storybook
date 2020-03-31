import React from 'react';
import Button from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Styles from './Button.module.scss';
// import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Icon from '../Icon/Icon';

export default {
    title: 'components|Button/Button',
    component: Button,
    decorators: [withKnobs],
}

export const button = () => {
    const label = text('Cildren', 'BUTTON');
    const size = select('Size', ['small', 'medium', 'big'], 'medium');
    const theme = select(
      'theme',
      ['primary', 'secondary', 'tertiary'],
      'primary'
    );
    const disabled = boolean('Disabled', false);
    const width = text('Width', '');
    return (
        
      <Button
        size={size}
        theme={theme}
        disabled={disabled}
        width={width}
        onClick={action('onClick')}
        // style={{backgroundColor:"black"}}
      >
        {label}
      </Button>
    );
  };

button.story = {
  name: 'Default'
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button theme="tertiary">TERTIARY</Button>;
};

export const sizesButton = () => {
    return (
      <div className={Styles.ButtonWrapper}>
          <div>
              <div className={Styles.description}>Small</div>
              <Button size="small">BUTTON</Button>
          </div>
          <div>
              <div className={Styles.description}>Medium</div>
              <Button size="medium">BUTTON</Button>
          </div>
          <div>
              <div className={Styles.description}>Big</div>
              <Button size="big">BUTTON</Button>
          </div>
      </div>
  );
};

export const disabledButton = () => {
    return (
      <div className={Styles.ButtonWrapper}>
            <div>
            <Button disabled>PRIMARY</Button>
            </div>
            <div>
            <Button disabled theme="secondary">
                SECONDARY
            </Button>
            </div>
            <div>
            <Button disabled theme="tertiary">
                TERTIARY
            </Button>
            </div>
        </div>
    );
  };

export const customSizedButton = () => {
    const style = {
      width: "20rem",
    }
    const fullStyle = {
      width: "100%",
    }
    return (
      <div className={Styles.ButtonWrapper}>
            <div>
            <Button style={style}>CUSTOM WIDTH</Button>
            </div>
            <div>
            <Button style={fullStyle}>FULL WIDTH</Button>
            </div>
        </div>
    );
};
export const withIcon = () => {
    return (
      <div className={Styles.ButtonWrapper}>
        <Button size="small">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button size="big">
          <Icon icon="heart" /> LIKE
        </Button>
      </div>
    );
};

export const iconOnly = () => {
    return (
      <div className={Styles.ButtonWrapper}>
          <div>
              <div className={Styles.description}>Small</div>
              <Button iconOnly size="small">
                <Icon icon="heart" />
              </Button>
              </div>
          <div>
              <div className={Styles.description}>Medium</div>
              <Button theme="secondary" iconOnly>
                <Icon icon="heart" />
              </Button>
          </div>
          <div>
              <div className={Styles.description}>Big</div>
              <Button theme="tertiary" iconOnly size="big">
                <Icon icon="heart" />
              </Button>
          </div>
      </div>
    );
};