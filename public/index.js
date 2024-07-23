/* React way */
import React, { useState } from "https://esm.sh/react@18.2.0/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@18.2.0/client?dev"
const app = document.getElementById('react')
const root = ReactDOMClient.createRoot(app)

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Counter'),
        React.createElement('div', null, count),
        React.createElement('button', { onClick: increment }, '+'),
        React.createElement('button', { onClick: decrement }, '-')
    );
};
const component = React.createElement(Counter)
const counters = React.createElement(React.Fragment, null , [component,component])
root.render(counters)

/* Vanilla way */

const btnInc = document.querySelectorAll('.inc')
const btnDec = document.querySelectorAll('.dec')


btnInc.forEach(element => {
    element.addEventListener('click', () => {
        const container = element.parentElement
        console.log(container);
        const counter = container.querySelector('.counter')
        const value = parseInt(counter.innerText)
        counter.innerText = value + 1
    })
});
btnDec.forEach(element => {
    element.addEventListener('click', () => {
        const container = element.parentElement
        const counter = container.querySelector('.counter')
        const value = parseInt(counter.innerText)
        if (value > 0)
            counter.innerText = value - 1
    })
});
