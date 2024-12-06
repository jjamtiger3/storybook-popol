import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Input from './Input';
import Table from './Table';

export default {
  component: Table,
  title: 'Table',
  tags: ['autodocs'],
  args: {
    style: {
        width: '350px'
    }
  },
};
const defaultColumns = [
    {
        label: 'Column1',
        id: 'column1',
        header: {
            style: {
                width: '50px'
            }
        }
    },
    {
        label: 'Column2',
        id: 'column2',
        header: {
            style: {
                width: '100px'
            }
        }
    },
    {
        label: 'Column3',
        id: 'column3'
    }
];
const multiColumns = [
    {
        label: 'Column1',
        id: 'column1',
        header: {
            style: {
                width: '50px'
            }
        }
    },
    {
        label: 'Column2',
        id: 'column2',
        header: {
            style: {
                width: '100px'
            }
        },
        children: [
            {
                label: 'Column3',
                id: 'column3'
            },
            {
                label: 'Column4',
                id: 'column4'
            },
            {
                label: 'Column5',
                id: 'column5'
            },
            {
                label: 'Column6',
                id: 'column6'
            },
            {
                label: 'Column7',
                id: 'column7'
            },
            {
                label: 'Column8',
                id: 'column8'
            },
            {
                label: 'Column9',
                id: 'column9',
            },
            {
                label: 'Column10',
                id: 'column10'
            }
        ]

    },
];
const templateColumns = [
    {
        label: 'Column1',
        id: 'column1',
        header: {
            style: {
                width: '50px'
            }
        }
    },
    {
        label: 'Column2',
        id: 'column2',
        header: {
            style: {
                width: '100px'
            }
        }
    },
    {
        label: 'Column3',
        id: 'column3',
        template: () => {
            return (
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <Input /><Button label="Button" />
                </div>
            )
        }
    },
];
const tooltipColumns = [
    {
        label: 'Column1',
        id: 'column1',
        type: 'checkbox',
        header: {
            style: {
                width: '50px'
            }
        }
    },
    {
        label: 'Column2',
        id: 'column2',
        header: {
            style: {
                width: '100px'
            }
        }
    },
    {
        label: 'Column3',
        id: 'column3',
        type: 'tooltip',
        tooltip: {
            position: 'right',
            suffix: true,
            style: {
                marginLeft: '4px'
            },
            text: `
                <p>
                    툴팁입니다.
                </p>
            `,
            icon: faCircleQuestion
        },
    },
];
const rows = [];
for (let i = 0; i < 10; i++) {
    rows.push({
        column1: `row${i}-column1`,
        column2: `row${i}-column2`,
        column3: `row${i}-column3`
    });
}
export const Default = {
    args: {
        columns: defaultColumns,
        rows: rows
    }
};
const tableConfig = {
    stripped: {
        backgroundColor: '#ffeeee'
    },
    row: {
        height: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        height: 40,
        style: {
            backgroundColor: '#e7e7e7',
            border: {
                width: 1,
                color: '#cccccc',
                style: 'solid'
            }
        }
    },
    border: {
        width: 1,
        color: '#cccccc',
        style: 'solid'
    },
}
export const TableStyle = {
    args: {
        columns: defaultColumns,
        rows: rows,
        config: tableConfig
    }
};


export const MultiColumns = {
    args: {
        columns: multiColumns,
        rows: rows,
    }
};

export const TemplateColumns = {
    args: {
        columns: templateColumns,
        rows: rows,
    }
};
export const TooltipColumns = {
    args: {
        columns: tooltipColumns,
        rows: rows,
    }
};