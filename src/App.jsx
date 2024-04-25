
import './App.scss'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Table from './components/Table'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/table' element={<Table/>}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
