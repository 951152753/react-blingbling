import React from 'react'
import Counter from '../components/counter'
import Timer from '../components/timer'
import About from '../components/about'

import '../styles/home.less'

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                客户
                <Counter />
                <Timer />
                <About />
            </div>
        )
    }
}
