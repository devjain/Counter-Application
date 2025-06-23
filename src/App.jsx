import './App.css'
import ProductList from './ProductList'
import ToDoForm from './TodoForm'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Counter from './Counter'

function App() {

  return (
    <>
    
     <BrowserRouter>
      <Routes>
        {/* Main layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route path="assignment3" element={<ProductList />} />
          <Route index element={<Counter />} />
          <Route path="assignment2" element={<ToDoForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
