import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";

const ToastWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    font-weight: 700;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme === 'success' ? '#cce5ff' : '#f8d7da'};
    border-color: ${(props) => props.theme === 'success' ? '#b8daff' : '#f5c6cb'};
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.5s ease-in-out; /* 스무스한 전환 효과 */
    &.show {
        opacity: 1;
    }
    &.hide {
        opacity: 0;
    }
`;
const Toast = ({ message, theme }) => {
    const [show, setShow] = useState(false);
    // const dispatch = useDispatch();

    useEffect(() => {
        if (message) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
                // dispatch({ type: 'ON_TOAST_HIDE'});
            }, 3000);
        }
    }, [message]);

    return (
        <ToastWrapper theme={theme} className={show ? 'show' : 'hide'}>
            { message }
        </ToastWrapper>
    );
};

export default Toast;