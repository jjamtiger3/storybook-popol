import Input from './Input';

export default {
  component: Input,
  title: 'Input',
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
    },
    type: {
      control: {
        type: 'select'
      },
      options: ['text', 'number']
    },
  }
};

export const Default = {
  args: {
    label: 'Input Here!!!!'
  },
};

export const NumberType = {
  args: {
    label: 'Input Here!!!!',
    type: 'number',
    max: 100,
    min: 5
  },
  argTypes: {
    max: {
      control: {
        type: 'number'
      }
    },
    min: {
      control: {
        type: 'number'
      }
    },
  }
};

export const MaxByteCheck = {
  args: {
    label: 'Input Here!!!!',
    maxByte: 10
  },
  argTypes: {
    maxByte: {
      control: {
        type: 'number',
      },
      description: '최대 입력 가능한 바이트 수를 설정합니다.'
    },
  }
};

export const ReadOnly = {
  args: {
    label: 'Input Here!!!!',
    value: 'readOnly',
    readOnly: true
  },
};

export const Required = {
  args: {
    label: 'Input Here!!!!',
    value: 'required',
    required: true
  },
};

export const MaxLength = {
  args: {
    label: 'Input Here!!!!',
    value: 'required',
    maxLength: 5
  },
};

export const NotUseFieldset = {
  args: {
    label: 'Input Here!!!!',
    value: 'required',
    notUseFieldset: true
  },
};

export const Disabled = {
  args: {
    label: 'Input Here!!!!',
    value: 'disabled',
    disabled: true
  },
};