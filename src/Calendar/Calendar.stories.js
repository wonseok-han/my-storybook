import React from 'react';
import Calendar from './Calendar';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// import mdx from './Hello.mdx';

export default {
  title: 'components|Calendar/Calendar', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Calendar, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
//   parameters: {
//     componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
//     docs: {
//       page: mdx
//     }
//   }
};

export const calendar = () => {
    // knobs 만들기
    const addonPicker = text('Picker', "date");
    const addonFormat = text('Format', 'YYYY-MM-DD');
    const addonRangePicker = boolean('RangePicker', false);
    const addonDefaultValue = text('DefaultValue', '20200327');
    const addonStart = text('DateStart', '20200101');
    const addonEnd = text('DateEnd', '20200327');
    const addonDisabled = boolean('Disabled', false)
    return (
        <Calendar
            picker={addonPicker}
            format={addonFormat}
            rangePicker={addonRangePicker}
            defaultValue={addonDefaultValue}
            start={addonStart}
            end={addonEnd}
            disabled={addonDisabled}
            onChange={action('onChange')}
        />
    );
}

calendar.story = {
    name: 'Default'
};

export const rangeCalendar = () => {
    return <Calendar rangePicker={true} />
};

export const disabledCalendar = () => {
    return <Calendar disabled={true} />
};