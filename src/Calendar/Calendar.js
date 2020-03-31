import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';
import './antd.css';

/** `Calendar` 컴포넌트는 AntDesign을 활용하여 날짜 입력을 해주기 위해 사용합니다. */
const Calendar = ({
    picker,
    format,
    rangePicker,
    defaultValue,
    start,
    end,
    disabled,
    onChange,
}) => {
    const { RangePicker } = DatePicker;
    return (
        <>
            {rangePicker ? (
                <RangePicker
                    picker={picker}
                    format={format}
                    defaultValue={[
                        moment(start),
                        moment(end),
                    ]}
                    disable={disabled}
                    onChange={onChange}
                />
            ) : (
                <DatePicker
                    picker={picker}
                    format={format}
                    defaultValue={moment(defaultValue)}
                    disabled={disabled}
                    onChange={onChange}
                />
            )}
        </>
    );
};

Calendar.propTypes = {
    /** Calendar 컴포넌트의 타입 */
    picker: PropTypes.oneOf(['date', 'month', 'week', 'year']),
    /** 날짜형식
    * 
    * 'YYYY-MM-DD', 'YYYY/MM/DD' 등
     */
    format: PropTypes.string,
    /** 범위를 지정할 수 있는 캘린더의 사용여부 */
    rangePicker: PropTypes.bool,
    /** rangePicker가 false일 때 캘린더의 기본 일자 */
    defaultValue: PropTypes.string,
    /** rangePicker가 true일 때 캘린더의 from 일자 */
    start: PropTypes.string,
    /** rangePicker가 true일 때 캘린더의 to 일자 */
    end: PropTypes.string,
    /** 비활성화 여부 */
    disabled: PropTypes.bool,
    /** 캘린더의 값이 바뀌었을 때의 이벤트 */
    onChange: PropTypes.func,
};
Calendar.defaultProps = {
    picker: 'date',
    format: 'YYYY-MM-DD',
    rangePicker: false,
    defaultValue: moment().format('YYYY-MM-DD'),
    start: moment().format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD'),
    disabled: false,
};

export default Calendar;