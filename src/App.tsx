import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Counry } from './pages/Country'
import { PageNotFound } from './pages/PageNotFound'

function App() {
  const routerItems=[
    {
      path: '/',
      element:<Layout />,
      errorElement: <PageNotFound />,
      children: [
        { path: '/', element: <Home />},
        { path: '/about', element: <About />},
        { path: '/contact', element: <Contact />},
        { path: '/country', element: <Counry />},
      ],
    }
    
  ]
  const router = createBrowserRouter(routerItems)

  return (
    <>
      
        <RouterProvider router={router} ></RouterProvider>
     
    </>
  )
}

export default App
