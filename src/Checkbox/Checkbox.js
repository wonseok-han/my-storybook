import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

/** `Checkbox` 컴포넌트는 `true`와 `false` 옵션에 대한 컨트롤을 하고 싶을 때 사용합니다. */
const Checkbox = ({
    id,
    name,
    labelText,
    defaultChecked,
    disabled,
    hideLabel,
    onChange,
}) => {
    return(
        <div className={styles.CheckboxDiv}>
            <input
                id={id}
                name={name}
                type="checkbox"
                defaultChecked={defaultChecked}
                onChange={onChange}
                disabled={disabled}
            />
            {!hideLabel ? <label htmlFor={id}>{labelText}</label> : <label htmlFor={id}></label>}            
        </div>
    );
};

Checkbox.propTypes = {
    /** Id */
    id : PropTypes.string.isRequired,
    /** 체크박스 Name */
    name : PropTypes.string,
    /** 라벨 텍스트 */
    labelText : PropTypes.string,
    /** 디폴트 체크 상태 */
    defaultChecked : PropTypes.bool,
    /** 비활성화 여부 */
    disabled : PropTypes.bool,
    /** 라벨 숨기기 옵션 */
    hideLabel : PropTypes.bool,
    /** 체크상태 변경 이벤트 */
    onChange : PropTypes.func,
};
Checkbox.defaultProps = {
    labelText : 'Checkbox Label',
    defaultChecked: false,
    disabled: false,
    hideLabel: false,
};

export default Checkbox;