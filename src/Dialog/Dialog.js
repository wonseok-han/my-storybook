import React from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Dialog.scss';
import classnames from 'classnames';

/** `Dialog` 컴포넌트는 modal창을 띄워줍니다. */
const Dialog = ({
    visible,
    title,
    description,
    hideButtons,
    cancellable,
    cancelText,
    confirmText,
    children,
    onCancel,
    onConfirm
  }) => {
    const invisible = (visible === false ? true : false);
    return (
      <div className={classnames('StyledDialog', {visible}, {invisible})}>
        <div className={classnames('StyledDialogDiv')}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          {!hideButtons && (
            <div style={{ marginTop: '3rem'}}>
              <ButtonGroup rightAlign>
                {cancellable && (
                  <Button theme="tertiary" onClick={onCancel}>
                    {cancelText}
                  </Button>
                )}
                <Button onClick={onConfirm}>{confirmText}</Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      </div>
    );
  };

Dialog.propTypes = {
  /** Show 여부 */
  visible: PropTypes.bool,
  /** 타이틀 */
  title: PropTypes.string,
  /** description */
  description: PropTypes.string,
  /** children으로 들어올 문자, 또는 노드 */
  children: PropTypes.node,
  /** 버튼숨김 옵션 */
  hideButtons: PropTypes.bool,
  /** 취소버튼 옵션 */
  cancellable: PropTypes.bool,
  /** 취소버튼 텍스트 */
  cancelText: PropTypes.string,
  /** 확인버튼 텍스트 */
  confirmText: PropTypes.string,
  /** 취소버튼 이벤트 */
  onCancel: PropTypes.func,
  /** 확인버튼 이벤트 */
  onConfirm: PropTypes.func,
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인'
};

export default Dialog;