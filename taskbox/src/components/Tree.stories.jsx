import Tree from './Tree';

export default {
  component: Tree,
  title: 'Tree',
  tags: ['autodocs'],
  args: {
    style: {
        width: '250px'
    },
    onNodeSelect: (node) => {
        console.log(node);
    }
  },
};
const items = [
    {
        title: 'root',
        key: '1',
        children: [
            {
                title: 'root-child1',
                key: '1_1',
                children: [
                    {
                        key: '1_1_1',
                        title: 'root-child1-child1'
                    },
                    {
                        key: '1_1_2',
                        title: 'root-child1-child2'
                    }
                ]
            },
            {
                key: '1_2',
                title: 'root-child2'
            }
        ]
    },
    {
        title: 'node1',
        key: '2',
        children: [
            {
                key: '2_1',
                title: 'node1-child1'
            },
            {
                key: '2_2',
                title: 'node1-child2'
            }
        ]
    },
    {
        key: '3',
        title: 'node2'
    }
];
export const Default = {
  args: {
    items
  },
};

export const RootSelected = {
  args: {
    items,
    rootSelected: true
  },
};

export const DisabledNode = {
  args: {
    items,
    disabledSelectNodes: ['2', '1_1', '3']
  },
};