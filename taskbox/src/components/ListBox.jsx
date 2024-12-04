import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Wrapper } from "../common/styled";
import styled from "styled-components";

const ListBoxWrapper = styled.ul`
    border: 1px solid #e5e5e5;
    padding: 0;
    min-width: 150px;
    min-height: 100px;
    overflow-y: scroll;
    li {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 30px;
        padding-left: 10px;
        &:hover {
            background-color: #f5f5f5;
        }
        &.active {
            background-color: #f2f2f2;
        }
    }
`;
const ListBox = forwardRef(({ items, ...props }, ref) => {
    const [listItems, setListItems] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(() => {
        setListItems([...items]);
    }, []);

    const addItem = (item) => {
        listItems.push(item);
        setListItems([...listItems]);
    }
    const removeItem = (item) => {
        const index = listItems.findIndex(i => i === item);
        listItems.splice(index, 1);
        setListItems([...listItems]);
        setSelectedIndex(-1);
    }
    const updateItem = (item, newItem) => {
        const index = listItems.findIndex(i => i === item);
        listItems[index] = newItem;
        setListItems([...listItems]);
    }
    const handleClick = (item) => {
        setSelectedIndex(listItems.findIndex(i => i === item));
        props.onItemSelect && props.onItemSelect(item);
    }
    useImperativeHandle(ref, () => ({
        addItem, 
        removeItem,
        updateItem
    }));
    return (
        <Wrapper>
            <ListBoxWrapper style={props.style}>
                {
                    listItems.map((item, index) => (
                        <li key={index} 
                            className={index === selectedIndex ? 'active' : ''} 
                            onClick={() => handleClick(item)}>{item.label}</li>
                    ))
                }
            </ListBoxWrapper>
        </Wrapper>
    )
})

export default ListBox;