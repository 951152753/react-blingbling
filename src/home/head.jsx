import React from 'react'
import Link from 'react-router-dom/Link'

export default class Head extends React.Component {
    render() {
        return (
            <div className="head">
                <div className="headLogo">logo</div>
                <ul className="headUl">
                    <li className="headCustomer">
                        <Link to="/about">客户</Link>
                    </li>
                    <li className="headCharge">
                        <Link to="/count">收费</Link>
                    </li>
                    <li className="headBill">票据</li>
                    <li className="headBookKepp">记账</li>
                    <li className="headTax">报税</li>
                    <li className="headKnowledge">知产</li>
                    <li className="headInfo">消息</li>
                    <li className="headManage">管理</li>
                    <li className="headSet">设置</li>
                </ul>
            </div>

        )
    }
}