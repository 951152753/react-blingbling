import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

// 定义一个可观察的状态对象，将状态对象传递给 mobx observable()
let countState = observable({ timer: 0 });

// 定义更改状态的函数，使用 mobx action来包裹它.
setInterval(
    action(() => {
        countState.timer += 1;
    }),
    1000
);

countState.resetTimer = action(() => {
    countState.timer = 0;
});

// 创建一个react组件, 它能够响应 observable 的变化, 即使用 @observer
@observer
export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>This is the Counter Page.</p>
                <Link to="/home">goto Home Page</Link>
                <br />
                <Link to="/about">goto About Page</Link>

                <div className="counter">
                    <h4>time passed:{countState.timer}</h4>
                    <button onClick={countState.resetTimer}>reset timer</button>
                </div>
            </div>
        )
    }
}

// // create State object
// let countState = observable({ timer: 0 });

// // define action
// setInterval(
//     action(() => {
//         countState.timer += 1;
//     }),
//     1000
// );

// countState.resetTimer = action(() => {
//     countState.timer = 0;
// });

// // create observer
// let Counter = observer(({ countState }) => {
//     return (
//         <div className="Counter">
//             <h1>Time passed
// : {countState.timer}</h1>
//             <button onClick={countState.resetTimer}>reset timer</button>
//         </div>
//     );
// });

// export default <Counter countState = {countState} />;
