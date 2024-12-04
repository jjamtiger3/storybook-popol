import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  title: 'RadioGroup',
  tags: ['autodocs'],
  args: {
    style: {
        width: '150px'
    }
  },
  argTypes: {
    id: {
      control: {
        type: 'text'
      }
    },
    name: {
      control: {
        type: 'text'
      }
    }
  }
};
const items = [
    {
        value: '1',
        label: '라디오1',
    },
    {
        value: '2',
        label: '라디오2',
    },
    {
        value: '3',
        label: '라디오3',
    }
];
const items2 = [
    {
        value: '1',
        label: '라디오1',
    },
    {
        value: '2',
        label: '라디오2',
        labelPosition: 'left'
    },
    {
        value: '3',
        label: '라디오3',
    }
];
const items3 = [
    {
        value: '1',
        label: '라디오1',
    },
    {
        value: '2',
        label: '라디오2',
        theme: 'blue'
    },
    {
        value: '3',
        label: '라디오3',
        theme: 'red'
    }
];
const items4 = [
    {
        value: '1',
        label: '라디오1',
    },
    {
        value: '2',
        label: '라디오2',
        readOnly: true
    },
    {
        value: '3',
        label: '라디오3',
        disabled: true
    }
];
export const Default = {
  args: {
    label: '라디오 - 기본',
    items
  },
};

export const SelectedIndex = {
  args: {
    label: '라디오 - 기본선택3',
    SelectedIndex: 2,
    items
  },
};

export const LabelPosition = {
  args: {
    label: '라디오 - 라벨위치',
    items: items2
  },
};

export const RadioTheme = {
  args: {
    label: '라디오 - theme',
    items: items3
  },
};

export const ReadOnly_Disabled = {
  args: {
    label: '라디오 - readOnly',
    items: items4
  },
};