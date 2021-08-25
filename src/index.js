import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import { Input } from 'antd';
import { Card } from 'antd';

const root=document.getElementById('root');

class Answer extends React.Component {
    render(){
        return <p> Отзыв</p>

    }

}


ReactDOM.render( <Answer />, root);
<div>ЧТо-то пока не получается добавить элемент из библиотеки</div>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
