import Toast from './Toast';

export default {
  component: Toast,
  title: 'Toast',
  tags: ['autodocs'],
  //👇 "Data"로 끝나는 export들은 스토리가 아닙니다.
  excludeStories: /.*Data$/,
  args: {
  },
};

export const Default = {
  args: {
    message: 'Simple Toast!'
  },
};