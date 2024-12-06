import Select from './Select';

export default {
  component: Select,
  title: 'Select',
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
const options = [
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
const options2 = [];
for(let i = 0; i < 100; i += 1) {
  options2.push({
    value: i,
    label: `라디오${i}`
  });
}
export const Default = {
  args: {
    label: 'Select - 기본',
    name: 'default-select',
    options
  },
};

export const Label = {
  args: {
    label: 'Select - 기본',
    name: 'default-select',
    options,
    useLabel: true,
    label: 'Select Label'
  },
};

export const UseNull = {
  args: {
    label: 'Select - 기본',
    name: 'default-select',
    options,
    useNull: true,
    nullLabel: '선택하세요'
  },
};

export const InputSelect = {
  args: {
    label: 'Select - 입력',
    name: 'input-select',
    type: 'input',
    options: options2,
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['input', 'default']
      }
    }
  }
};