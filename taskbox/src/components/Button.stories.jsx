import { background } from 'storybook/internal/theming';
import Button from './Button';
import { faPencilAlt  } from "@fortawesome/free-solid-svg-icons";

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'text'
      }
    },
  }
};

export const Default = {
  args: {
    label: '버튼',
  },
};

export const Theme = {
  args: {
    label: '버튼',
    theme: 'red'
  },
  argTypes: {
    theme: {
      options: ['red', 'blue', 'green'],
      control: { type: 'radio' }
    }
  }
};

export const Outline = {
  args: {
    label: '버튼',
    outline: true,
    outlinestyle: {
      color: '#ff0000',
      backgroundColor: 'transparent',
      border: '1px solid #ff0000',
      hover: {
        backgroundColor: '#ff0000',
        color: '#fff'
      }
    }
  },
  argTypes: {
    outline: {
      control: { type: 'boolean' }
    },
  }
};

export const Icon = {
  args: {
    label: '버튼',
    outline: true,
    primary: true,
    size: 'auto',
    faIcon: faPencilAlt
  }
};