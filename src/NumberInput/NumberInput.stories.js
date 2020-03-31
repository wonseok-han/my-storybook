import React from 'react';
import NumberInput from './NumberInput';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// import mdx from './Hello.mdx';

export default {
  title: 'components|NumberInput/NumberInput', // 스토리북에서 보여질 그룹과 경로를 명시
  component: NumberInput, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
//   parameters: {
//     componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
//     docs: {
//       page: mdx
//     }
//   }
};

export const numberInput = () => {
    // knobs 만들기
    const addonValue = number('Value', 2020);
    const addonDisabled = boolean('Disabled', false);
    const addonVisible = boolean('Visibility', true);
    return (
        <NumberInput
            value={addonValue}
            disabled={addonDisabled}
            visible={addonVisible}
            onChange={action('onChange')}            
        />
    );
}

numberInput.story = {
    name: 'Default'
  };

export const disabledNumberInput = () => <NumberInput value={2019} disabled={true} />

export const invisibleNumberInput = () => <NumberInput value={2019} visible={false} />