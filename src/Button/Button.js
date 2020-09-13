import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';
import classnames from 'classnames';

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({
    children,
    theme,
    size,
    disabled,
    iconOnly,
    onClick,
    ...props
  }) => {
    return (
      <button
        className={classnames(
          theme === 'primary' ? Styles.Primary :
          theme === 'secondary' ? Styles.Secondary :
          theme === 'tertiary' ? Styles.Tertiary : Styles.Primary,
          iconOnly ? ( size === 'small' ? Styles.IconSmall : 
                       size === 'medium' ? Styles.IconMedium : 
                       size === 'big' ? Styles.IconBig : Styles.IconMedium)
          : ( size === 'small' ? Styles.Small : 
              size === 'medium' ? Styles.Medium : 
              size === 'big' ? Styles.Big : Styles.Medium ),
          iconOnly ? Styles.IconOnly : ""
        )}
        disabled={disabled}
        style={props.style}
        onClick={onClick}
      >
        {children}
      </button>
      // <StyledButton
      //   themes={theme}
      //   sizes={size}
      //   iconOnly={iconOnly}
      //   iconOnlySizes={iconOnly ? size : "default"}
      //   disabled={disabled}
      //   width={width}
      //   onClick={onClick}
      // >
          
      // </StyledButton>
    );
  };

Button.propTypes = {
  /** 버튼 안의 내용 */
  children: PropTypes.node,
  /** 클릭했을 때 호출할 함수 */
  onClick: PropTypes.func,
  /** 버튼의 생김새를 설정합니다. */
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** 버튼의 크기를 설정합니다 */
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  /** 버튼을 비활성화 시킵니다. */
  disabled : PropTypes.bool,
  /** 버튼의 너비를 임의로 설정합니다. */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly : PropTypes.bool,
};
  
Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
  disabled: false,
  iconOnly: false
};

export default Button;