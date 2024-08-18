import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignUp from './pages/SignUp'


const app = () => {
  return (
	  <div>
		  <SignUp/>
			<ToastContainer/>
		</div>
  )
}

export default app