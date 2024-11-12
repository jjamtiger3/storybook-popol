import { fn } from "@storybook/test";

import CheckBox from './CheckBox';

export default {
  component: CheckBox,
  title: 'CheckBox',
  tags: ['autodocs'],
  //👇 "Data"로 끝나는 export들은 스토리가 아닙니다.
  excludeStories: /.*Data$/,
  args: {
  },
};

export const Default = {
  args: {
    label: '체크박스'
  },
};

export const PositionLeft = {
  args: {
    label: '체크박스',
    labelPosition: 'left'
  },
};