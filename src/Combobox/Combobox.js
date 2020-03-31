import React from 'react';
import PropTypes from 'prop-types'
import Styles from './Combobox.module.scss';

/** `Combobox` 컴포넌트는 여러 개의 리스트 중 하나의 옵션을 선택할 때 사용합니다. */
const Combobox = ({
    items,
    disabled,
    onChange,
}) => {
    return(
        <select
            className={Styles.select}
            onChange={onChange}
            disabled={disabled}
            defaultValue={items[items.findIndex(item => item.selected)].code}
        >
            {items.map((item, index) => <option key={index} value={item.code}>{item.text}</option>)}
        </select>
    );
}

Combobox.propTypes ={
    /** 콤보박스 Item */
    items: PropTypes.array,
    /** 비활성화 여부 */
    disabled: PropTypes.bool,
    /** 선택값 변경 이벤트 */
    onChange: PropTypes.func
}
Combobox.defaultProps = {
    items: [{code: "00", text: "전체", selected: true, }],
    disabled: false,
}

export default Combobox;