import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Styles from './NumberInput.module.scss';

/** `NumberInput` 컴포넌트는 Number 값을 입력받을 때 사용합니다. */
const NumberInput = ({
    value,
    disabled,
    visible,
    onChange,
    ...props
}) => {
    const [val, setVal] = useState(value);

    const onClickUp = () => {
        setVal(Number(val+1));
    };
    const onClickDown = () => {
        setVal(Number(val-1));
    };

    // const onChange = (e) => {
    //     setVal(e.target.value);
    // };
    return (
        
        <div className={Styles.NumberInput}>
            <input
                value={val}
                onChange={onChange}
                disabled={disabled}
            >
                
            </input>
            <div style={{display: (!visible ? "none" : "flex")}}>
                <button disabled={disabled} onClick={onClickUp}>▲</button>
                <button disabled={disabled} onClick={onClickDown}>▼</button>
            </div>
        </div>

    );
}

NumberInput.propTypes = {
    /** 셋팅값 */
    value: PropTypes.number,
    /** 비활성화 여부 */
    disabled: PropTypes.bool,
    /** 표시 여부 */
    visible: PropTypes.bool,
    /** 값변경 이벤트 */
    onChage: PropTypes.func,
}
NumberInput.defaultProps = {
    initVal: 0,
    disabled: false,
    visible: true,
}

export default NumberInput;