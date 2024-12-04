import Radio from './Radio';

export default {
  component: Radio,
  title: 'Radio',
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
export const Default = {
  args: {
    label: '라디오 - 기본',
  },
};

export const LabelPosition = {
  args: {
    label: '라디오 - 라벨위치',
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

export const RadioTheme = {
  args: {
    label: '라디오 - theme',
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio'
      },
      options: ['', 'blue', 'red']
    },
  }
};

export const ReadOnly = {
  args: {
    label: '라디오 - readOnly',
    readOnly: true
  },
};

export const Disabled = {
  args: {
    label: '라디오 - disabled',
    disabled: true
  },
};