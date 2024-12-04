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

const options = [
    {
        value: 'item1',
        label: 'item1'
    },
    {
        value: 'item2',
        label: 'item2'
    },
    {
        value: 'item3',
        label: 'item3'
    },
];
export const Default = {
  args: {
    options
  },
};