import ListBox from './ListBox';

export default {
  component: ListBox,
  title: 'ListBox',
  tags: ['autodocs'],
  args: {
    style: {
        width: '250px'
    }
  },
  argTypes: {
    id: {
      control: {
        type: 'text'
      }
    },
  }
};

const items = [
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
    items
  },
};