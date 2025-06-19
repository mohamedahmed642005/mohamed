import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'

import NAVABAR from './components/NAVABAR'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact"
import Support from './pages/Support'
import Pricing from './pages/Pricing'

const Layout = () => {
  return (
    <>
      <NAVABAR />
         <main className="pt-[70px]"></main>
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="support" element={<Support />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
