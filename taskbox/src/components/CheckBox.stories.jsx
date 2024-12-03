import CheckBox from './CheckBox';

export default {
  component: CheckBox,
  title: 'CheckBox',
  tags: ['autodocs'],
  //👇 "Data"로 끝나는 export들은 스토리가 아닙니다.
  excludeStories: /.*Data$/,
  args: {
  },
  argTypes: {
    id: {
      control: {
        type: 'text'
      }
    }
  }
};

export const Default = {
  args: {
    label: '체크박스 - 기본',
    id: 'checkbox-default'
  },
};

export const PositionLeft = {
  args: {
    label: '체크박스 - 포지션',
    labelPosition: 'left',
    id: 'checkbox-position'
  },
  argTypes: {
    labelPosition: {
      control: {
        type: 'radio'
      },
      options: ['left', 'right']
    },
  }
};