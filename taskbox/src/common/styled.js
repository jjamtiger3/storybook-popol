import styled from "styled-components";
import PushIcon from '../assets/images/icons/ico_push.svg';
import SmsIcon from '../assets/images/icons/ico_sms.svg';
import RcsIcon from '../assets/images/icons/ico_rcs.svg';
import KakaoIcon from '../assets/images/icons/ico_kakao.svg';

const Wrapper = styled.div`
    font-family: 'Pretendard', sans-serif;
    color: ${props => props?.css?.color || '#000'};
    font-size: 13px;
    background-color: ${props => !props?.useTab && '#fff'};
    padding: ${props => !props?.useTab && '20px'};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    body {
    	line-height: 1;
        font-size: 13px;
    }
    ol, ul {
    	list-style: none;
    }
    blockquote, q {
    	quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    	content: '';
    	content: none;
    }
    table {
    	border-collapse: collapse;
    	border-spacing: 0;
    }
    h3 {
        margin-bottom: 10px;
        &.header {
            background-color: #4f5564;
            color: #fff;
            height: 35px;
            border-radius: 20px 20px 0 0;
            padding: 0 10px;
            display: flex;
            align-items: center;
            margin-bottom: 0;
            &.h-end {
                justify-content: flex-end;
            }
        }
    }
    span {
        .fa-icon {
            margin-left: 4px;
        }
    }
    .half-size {
        width: 50%;
    }
    .full-size {
        width: 100%;
    }
    .emphasis {
        font-weight: 700;
        &.red {
            color: #ff0000;
        }
        &.warning {
            color: #ff9933;
        }
        &.blue {
            color: #076ae4;
        }
    }
    .f-m-1 {
        font-size: 15px;
    }
    .f-m-2 {
        font-size: 18px;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .alert {
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-radius: 4px;
        &-success {
            color: #3c763d;
            background-color: #dff0d8;
            border-color: #d6e9c6;
        }
    }
        .no-margin {
            margin: 0;
        }
        .taller {
            line-height: 1.2;
        }
        .v-margin-10 {
            margin: 10px 0;
        }
        .margin-top-0 {
            margin-top: 0px;
        }
        .margin-top-10 {
            margin-top: 10px;
        }
        .margin-left-10 {
            margin-left: 10px;
        }
        .margin-left-20 {
            margin-left: 20px;
        }
        .margin-right-10 {
            margin-right: 10px;
        }
        .margin-right-20 {
            margin-right: 20px;
        }
        .margin-bottom-0 {
            margin-bottom: 0px;
        } 
        .margin-bottom-10 {
            margin-bottom: 10px;
        } 
        .padding-10 {
            padding: 10px;
        }
        .v-margin-20 {
            margin: 20px 0;
        }
        .margin-top-20 {
            margin-top: 20px;
        }
        .margin-bottom-20 {
            margin-bottom: 20px;
        } 
        .padding-20 {
            padding: 20px;
        }
        .padding-bottom-20 {
            padding-bottom: 20px;
        }
        .padding-top-20 {
            padding-top: 20px;
        }
        .margin-top-30 {
            padding-top: 30px;
        }
        .padding-top-30 {
            padding-top: 30px;
        }
        .v-padding-20 {
            padding: 20px 0;
        }
        .v-padding-10 {
            padding: 10px 0;
        }
        .full-size {
            box-sizing: border-box;
            width: 100%;
        }
    .image-link {
        text-decoration: none;
    }
    .url-title {
        font-weight: 700;
        width: 150px;
    }
    .flexible {
        display: flex;
        gap: 10px;
        &.gap-4 {
            gap: 4px;
        }
        &.column {
            flex-direction: column;
        }
        &.gap-0 {
            gap: 0;
        }
        &.gap-20 {
            gap: 20px;
        }
        &.wide {
            justify-content: space-between;
        }
        &.around {
            justify-content: space-around;
        }
        &.center {
            justify-content: center;
        }
        &.h-start {
            justify-content: flex-start;
        }
        &.h-end {
            justify-content: flex-end;
        }
        &.middle {
            align-items: center;
        }
        &.v-end {
            align-items: flex-end;
        }
        .col-3_4 {
            width: 75%;
        }
    }
    .emphasis {
        font-weight: 700;
        &-info {
            color: #ff9933;
        }
    }
    .border {
        border: 1px solid #ccc;
    }
    .box {
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px 0;
    }
    .badge {
        display: inline-block;
        min-width: 15px;
        padding: 6px 8px;
        font-size: 12px;
        font-weight: bold;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 50px;
        background-color: #777;
        &.primary {
            background-color: #09a0e6;
        }
    }
    .link-download {
        text-decoration: none;
        cursor: pointer;
        color: #333;
        &:hover {
            text-decoration: underline;
        }
    }
    .ico {
        width: 28px;
        height: 28px;
        display: inline-flex;
        overflow: hidden;
        text-indent: -100px;
        color: #FFFFFF;
        border-radius: 5px;
        margin: 0 1px;
        border: none;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
        &.same-size {
            background-size: 28px 28px;
        }
        &.ico-email {
            background-image: url(${SmsIcon});
            background-color: #4EDCB9;
        }
        &.ico-push {
            background-image: url(${PushIcon});
            background-color: #43B4E9;
        }
        &.ico-chat {
            background-image: url(${KakaoIcon});
            background-color: #DAD458;
        }
        &.ico-rcs {
            background-image: url(${RcsIcon});
            background-color: #8389E0;
        }
        &.ico-sms {
            background-image: url(${SmsIcon});
            background-color: #DC676B;
        }
    }
    .channel-label {
        height: 30px;
        color: #fff;
        &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        &.email-bg {
            background-color: #4EDCB9;
        }
        &.push-bg {
            background-color: #43B4E9;
        }
        &.sms-bg {
            background-color: #DC676B;
        }
        &.chat-bg {
            background-color: #DAD458;
        }
        &.rcs-bg {
            background-color: #8389E0;
        }
    }
`;
const TabContentWrapper = styled.div`
    background-color: #fff;
    padding: 20px;
`;
const HeaderWrapper = styled.div`
    background-color: ${(props) => props.theme === 'dark' ? '#454b59' : props.theme === 'hs-green-1' ? '#00653b' : props.theme === 'white' ? '#fff' : '#f4f4f4'};
    color: ${(props) => (props.theme === 'dark' || props.theme === 'hs-green-1') ? '#fff' : '#222'};
    padding: ${(props) => props.padding ? props.padding : '20px'};
    display: flex;
    border-radius: 12px;
    &.no-radius {
        border-radius: 0;
    }
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    &.h-start {
        justify-content: flex-start;
    }
    &.h-end {
        justify-content: flex-end;
    }
    &.center {
        justify-content: center;
    }
    .label {
        font-size: 14px;
        line-height: 20px;
        color: #333;
    }
    .page-header {
        font-size: 30px;
        height: 36px;
        color: #000;
    }
    .small-label {
        font-size: 13px;
        width: 60px;
        & + div {
            @media screen and (max-width: 1710px) {
                width: 150px;
            }
        }
    }
    @media screen and (max-width: 1710px) {
        .label {
            width: auto;
            font-size: 12px;
        }
    }
    &.wide {
        justify-content: space-between;
    }
    .condition-container {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .search-condition {
        width: 140px;
        @media screen and (max-width: 1710px) {
            width: 120px;
        }
    }
    .search-input {
        @media screen and (max-width: 1710px) {
            width: 120px;
        }
    }
    .input-search-value {
        width: 300px;
    }
    .search-wrapper {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .btn-excel-download {
        width: 160px;
    }
`;
const TableHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    &.h-start {
        justify-content: flex-start;
    }
    &.h-end {
        justify-content: flex-end;
    }
    &.gap-4 {
        gap: 4px;
    }
    .flexible {
        display: flex;
        gap: 10px;
    }
    .total-list {
        display: flex;
        align-items: center;
        span {
            font-size: 16px;
            line-height: 24px;
            &.total-cnt {
                margin-left: 5px;
                display: inline-block;
                min-width: 10px;
                padding: 3px 7px;
                font-size: 12px;
                font-weight: bold;
                line-height: 1;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                vertical-align: baseline;
                background-color: #9f9f9f;
                border-radius: 50px;
            }
        }
    }
    @media (max-width: 1700px) {
        .total-list {
            span {
                font-size: 14px;
            }
        }
    }
`;
const FilterWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    &.h-start {
        justify-content: flex-start;
    }
    &.h-end {
        justify-content: flex-end;
    }
    &.center {
        justify-content: center;
    }
    .flexible {
        display: flex;
        gap: 10px;
    }
`;

const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    b {
        margin-left: 4px;
    }
`;
const PageHeaderWrapper = styled.div`
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
    span {
        font-size: 26px;
        font-weight: 700;
        color: #333;
    }
`;
const WideHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .applied-app-container {
        margin: 22px 0;
        font-size: 22px;
        text-align: center;
        span {
            font-weight: 700;
        }
    }
`;
const GridLayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    width: ${(props) => props.widthauto ? 'auto' : 1440}px;
    grid-gap: ${(props) => props.nogap ? 0 : 20}px;
    box-sizing: border-box;
    @media screen and (max-width: 1400px) {
        grid-template-columns: ${({ columns }) => `repeat(${columns - 1 > 1 ? columns - 1 : columns}, 1fr)`};
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    div.column {
        width: ${(props) => (100 / (props.columns || 1)).toFixed(2)}%;
    }
`;

const Column = styled.div``;

const Dim = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
const PopupWrapper = styled.div`
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: ${(props) => props.popupstyle?.width || '600px'};
    height: ${(props) => props.popupstyle?.height || 'auto'};
    padding: ${(props) => props.popupstyle?.padding || '0'};
    overflow: auto;
    .btn-popup-item {
        border: none;
        color: #fff;
        cursor: pointer;
        padding-right: 10px;
        &.email {
            background-color: #4EDCB9;
        }
        &.sms {
            background-color: #DC676B;
        }
        &.push {
            background-color: #43B4E9;
        }
        &.rcs {
            background-color: #8389E0;
        }
    }
    ul {
        li {
            padding: 10px;
            text-align: center;
            cursor: pointer;
            &:hover {
                background-color: #f9f9f9;
            }
        }
    }
    .btn-list-popup-close {
        width: 100%;
        height: 50px;
    }
    @media screen and (max-width: 1710px) {
        height: ${(props) => props.mobileStyle?.height || 'auto'};
    }
`;

const TableWrapper = styled.table`
    width: 100%;
    border: 1px solid #e5e5e5;
    &.no-border {
        border: none;
        th, td {
            border: none;
        }
    }
    .border-bottom {
        border-bottom: 1px solid #e5e5e5;
    }

    .input {
        width: 350px;
    }
    tr {
        height: 40px;
    }
    th {
        width: 150px;
        padding: 4px 10px;
        background-color: #e7e7e7;
        border: 1px solid #e5e5e5;
        font-size: 13px;
        text-align: left;
        .fa-icon {
            margin-left: 4px;
            &.left {
                margin-left: 0;
                margin-right: 4px;
            }
        }
        .fa-icon.required {
            color: #FF5722;
        }
        &.th-2 {
            width: 140px;
        }
        &.center {
            text-align: center;
        }
    }
    td {
        font-size: 13px;
        padding: 4px 10px;
        border: 1px solid #e5e5e5;
        text-align: left;
    }
    .btn-icon {
        background-color: #008850;
        color: #fff;
        border-radius: 5px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        & > div {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:hover {
            background-color: #00aa50;
        }
    }
`;

const TransitionBox = styled.div`
    height: 0;
    visibility: hidden;
    &.show {
        min-height: 300px;
        visibility: visible;
    }
`
const RegistStepWrapper = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    position: relative;
    button {
        width: 50%;
        height: 40px;
    }
    img {
        position: absolute;
        right: calc(50% - 10px);
        top: calc(50% - 10px);
        width: 20px;
        height: 20px;
        z-index: 10;
    }
`;

export {
    Wrapper,
    TableHeaderWrapper,
    TabContentWrapper,
    HeaderWrapper,
    IconWrapper,
    ButtonWrapper,
    FilterWrapper,
    PageHeaderWrapper,
    WideHeaderWrapper,
    GridLayoutWrapper,
    PopupWrapper,
    TableWrapper,
    Row,
    Column,
    RegistStepWrapper,
    TransitionBox,
    Dim
}