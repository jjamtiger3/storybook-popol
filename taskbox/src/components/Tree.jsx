import { faFileAlt, faFolderMinus, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const TreeContainer = styled.div`
  border: 1px solid #e0e0e0;
  ul {
    list-style-type: none;
    padding-left: 20px;
  }

  li {
    cursor: pointer;
  }

  .folder {
    font-weight: bold;
  }
    .node-enter {
      max-height: 0;
      opacity: 0;
      transition: max-height 100ms ease-out, opacity 100ms ease-out;
    }
    .node-enter-active {
      max-height: 600px;
      opacity: 1;
    }
    .node-exit {
      opacity: 1;
      max-height: 600px;
      transition: max-height 100ms ease-in, opacity 100ms ease-in;
    }
    .node-exit-active {
      max-height: 0;
      opacity: 0;
    }
    .selected {
        background-color: #f0f0f0;
    }
`;
const TreeTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    .node-title {
        width: 100%;
        text-align: left;
        margin-left: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px; /* 적절한 최대 너비 설정 */
    }
`;
const TreeNode = ({ 
    node, 
    useCheckBox = false,
    selected, 
    onNodeSelect = (node) => {}, 
    onNodeChecked = (checked, node) => {}, 
    ...props 
}) => {
    const [isOpen, setIsOpen] = useState(node.open);
    const [checked, setChecked] = useState(node.checked);

    useEffect(() => {
        node.open = isOpen;
    }, [isOpen]);
    useEffect(() => {
        node.checked = checked;
    }, [checked]);
    const handleToggle = (node) => {
        if (node.children) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = () => {
        onNodeSelect(node);
    }

    const handleChecked = (checked, node) => {
        setChecked(checked);
        onNodeChecked(checked, node);
    };

    return (
        <li>
            <TreeTitleWrapper  className={`${node.children ? 'folder' : ''} ${selected === node ? 'selected' : ''}`}>
                 {
                    useCheckBox && (
                        <input type="checkbox" checked={node.checked} onChange={(e) => handleChecked(e.target.checked, node)} />
                    )
                 }
                <FontAwesomeIcon icon={node.children ? (isOpen ? faFolderMinus : faFolderPlus) : faFileAlt}
                    onClick={() => handleToggle(node)}
                 />
                <span className="node-title" 
                    title={node.title}
                    onClick={handleSelect} 
                    onDoubleClick={() => handleToggle(node)}
                >
                    {node.title}
                </span>
            </TreeTitleWrapper>
            {
                node.children && (
                    <TransitionGroup component="ul">
                      {isOpen &&
                        node.children.map((child) => (
                            <CSSTransition
                                key={child[props.identifier] || child['key']}
                                timeout={100}
                                classNames="node"
                            >
                                <TreeNode 
                                    node={child} 
                                    useCheckBox={useCheckBox}
                                    onNodeSelect={onNodeSelect} 
                                    onNodeChecked={onNodeChecked}
                                    selected={selected}  
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )
            }
        </li>
    );
}
const Tree = forwardRef(({ 
    items = [], 
    useCheckBox = false,
    disabledSelectNodes = [], 
    onNodeSelect = (node) => {}, 
    onNodeChecked = (checked, node) => {},
    ...props 
}, ref) => {
    const [selectedNode, setSelectedNode] = useState(null);
    const [treeItems, setTreeItems] = useState([]);

    useEffect(() => {
        if (props.rootSelected && items.length > 0) {
            items[0].open = true;
        }
        setTreeItems([...items]);
    }, [items]);

    const handleNodeSelect = (node) => {
        if (disabledSelectNodes.indexOf(node.key) > -1) {
            return;
        }
        setSelectedNode(node);
        onNodeSelect(node);
    };
    const handleNodeChecked = (checked, node) => {
        const checkChildren = (children) => {
            if (children) {
                children.forEach((child) => {
                    child.checked = checked;
                    checkChildren(child.children);
                });
            }
        };
        node.checked = checked;
        checkChildren(node.children);
        const updatedTreeItems = [...treeItems];
        setTreeItems([...updatedTreeItems]);
    }
    const getTreeItems = () => {
        return treeItems;
    }
    useImperativeHandle(ref, () => ({
        getTreeItems
    }));
    return (
        <TreeContainer style={props.style}>
            <ul>
                {treeItems.map((item) => (
                    <TreeNode 
                        key={item.title} 
                        node={item} 
                        useCheckBox={useCheckBox}
                        onNodeSelect={handleNodeSelect} 
                        onNodeChecked={handleNodeChecked}
                        selected={selectedNode}  
                    />
                ))}
            </ul>
        </TreeContainer>
    );
})

export default Tree;