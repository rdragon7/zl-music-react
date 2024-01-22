import { useRoutes } from 'react-router-dom'
import { routes } from './router'

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return <Provider store={store}>{useRoutes(routes)}</Provider>
}

export default App
