import React from 'react';
import Combobox from './Combobox';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// import mdx from './Hello.mdx';

export default {
  title: 'components|Combobox/Combobox', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Combobox, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
//   parameters: {
//     componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
//     docs: {
//       page: mdx
//     }
//   }
};

export const combobox = () => {
    // knobs 만들기
    const addonItems = object('', [
        { code: 'option-0', text: 'Option 1', },
        { code: 'option-1', text: 'Option 2', },
        { code: 'option-2', text: 'Option 3', selected: true, },
        { code: 'option-3', text: 'Option 4', },
        { code: 'option-4', text: 'Option 5', },
    ]);
    const addonDisabled = boolean('Disabled', false)
    return (
        <Combobox
            items={addonItems}
            disabled={addonDisabled}
            onChange={action('onChange')}            
        />
    );
}

combobox.story = {
    name: 'Default'
  };

export const disabledCombo = () => {
    return (
        <Combobox id="comboBox" disabled={true} />
    );
};