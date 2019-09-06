import React from 'react'
import { Button } from 'antd'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('homeStore')
@observer
export default class Counter extends React.Component {
    static propTypes = {
        homeStore: PropTypes.shape({}).isRequired,
    }
    render() {
        const { homeStore } = this.props
        const { number, increase, decrease } = homeStore

        return (
            <div className="counter">
                <p>This is the Counter Page.</p>
                当前数：{number}
                <div>
                    <Button className="btn" type="primary" onClick={increase}>增加</Button>
                    <Button type="primary" onClick={decrease}>减少</Button>
                </div>
            </div>
        )
    }
}
