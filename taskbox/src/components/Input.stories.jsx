import Input from './Input';

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
  //👇 "Data"로 끝나는 export들은 스토리가 아닙니다.
  excludeStories: /.*Data$/,
  args: {
  },
};

export const Default = {
  args: {
    label: 'Input Here!!!!'
  },
};

export const NumberType = {
  args: {
    label: 'Input Here!!!!',
    type: 'number'
  },
};

export const ReadOnly = {
  args: {
    label: 'Input Here!!!!',
    value: 'readOnly',
    readOnly: true
  },
};

export const Disabled = {
  args: {
    label: 'Input Here!!!!',
    value: 'disabled',
    disabled: true
  },
};

export const Required = {
  args: {
    label: 'Input Here!!!!',
    required: true
  },
};