import React from 'react'

export default class Aside extends React.Component{
    render(){
        return(
            <ul className="aside">
                <li className="asideAllCustomers">全部客户</li>
                <li className="asideImport">导爷导入</li>
                <li className="asideRecycle">回收站</li>
            </ul>
        )
    }
}