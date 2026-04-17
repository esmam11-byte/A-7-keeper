import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import FriendProvider from './contexts/FriendProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <FriendProvider>

      <App />

      <ToastContainer />
    </FriendProvider>


  </StrictMode>
)
