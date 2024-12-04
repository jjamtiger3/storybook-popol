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
export const Default = {
  args: {
    label: '라디오 - 기본',
    name: 'default-radio',
    items
  },
};

export const SelectedIndex = {
  args: {
    label: '라디오 - 기본선택3',
    name: 'default-radio',
    selectedIndex: 2,
    items
  },
};

export const LabelPosition = {
  args: {
    label: '라디오 - 라벨위치',
    name: 'default-radio',
    items: items2
  },
};

export const RadioTheme = {
  args: {
    label: '라디오 - theme',
    name: 'default-radio',
    theme: 'blue',
    items
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio'
      },
      options: ['none', 'blue', 'red']
    },
  }
};

export const ReadOnly = {
  args: {
    label: '라디오 - readOnly',
    name: 'default-radio',
    readOnly: true,
    items
  },
};

export const Disabled = {
  args: {
    label: '라디오 DisabledeadOnly',
    name: 'default-radio',
    disabled: true,
    items
  },
};