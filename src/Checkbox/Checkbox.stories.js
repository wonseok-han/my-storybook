import React from 'react';
import Checkbox from './Checkbox';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// import mdx from './Hello.mdx';

export default {
  title: 'components|Checkbox/Checkbox', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Checkbox, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
//   parameters: {
//     componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
//     docs: {
//       page: mdx
//     }
//   }
};

export const checkBox = () => {
    // knobs 만들기
    const addonId1 = text('Id1', "chkBox1");
    const addonId2 = text('Id2', "chkBox2");
    const addonLabelText = text('LabelText', 'Checkbox Label Text');
    const addonDisabled = boolean('Disabled', false);
    const addonHideLabel = boolean('HideLabel', false);
    return (
        <>
            <Checkbox
                id={addonId1}
                labelText={addonLabelText}
                disabled={addonDisabled}
                hideLabel={addonHideLabel}
                onChange={action('onChange')}
            />
            <Checkbox
                id={addonId2}
                labelText={addonLabelText}
                disabled={addonDisabled}
                hideLabel={addonHideLabel}
                onChange={action('onChange')}
            />
        </>
    );
};

checkBox.story = {
  name: 'Default'
};

export const defaultChecked = () => {
    return (
        <Checkbox id="chkBox1" defaultChecked={true} />
    );
};

export const unChecked = () => {
    return (
        <Checkbox id="chkBox1" defaultChecked={false} />
    );
};

export const disabled = () => {
    return (
        <Checkbox id="chkBox1" disabled={true} />
    );
};

export const hideLabel = () => {
    return (
        <Checkbox id="chkBox1" hideLabel={true} />
    );
};