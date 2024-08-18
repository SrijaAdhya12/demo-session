import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './components/AppRouter'


const app = () => {
  return (
	  <div>
		  <AppRouter/>
			<ToastContainer/>
		</div>
  )
}

export default app