import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ButtonGroup.module.scss';
import classnames from 'classnames';

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
const ButtonGroup = ({
  direction,
  rightAlign,
  children,  
  ...props
}) => {
  const style = {
    ...props.style,
    justifyContent: rightAlign ? "flex-end" : "flex-start",
  }
  return (
    <div
      className={classnames(
        Styles.StyledButtonDiv,
        direction === 'column' ? Styles.Direction_Col : Styles.Direction_Row
      )}
      style={style}
    >
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  /** 버튼을 보여줄 방향 */
  direction: PropTypes.oneOf(['row', 'column']),
  /** 버튼을 우측에 보여줍니다. */
  rightAlign : PropTypes.bool,
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: PropTypes.node,
};

ButtonGroup.defaultProps = {
  direction: 'row',
  rightAlign: false
};

export default ButtonGroup;