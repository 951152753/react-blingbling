import React from 'react'
import ReactDOM from 'react-dom'
import './styles/public.less'
import App from 'routes/index'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
