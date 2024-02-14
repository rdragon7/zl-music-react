import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'

import 'normalize.css'
import '@/style/base.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
)
