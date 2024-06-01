import { RouterProvider } from 'react-router-dom';
import './App.css'
import { router } from './router/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  )
}

export default App
