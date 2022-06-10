import {useState, useEffect} from 'react'
import {faUser} from 'react-icons/fa'
function Register() {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        pasword: '',
        password2: ''
    })
    const {name, email, password,password2} = formData
  return (
    <>
        <section className='heading'>
           <h1><faUser /></h1>
           <p>Please Create an account</p>
        </section>
    </>
  )
}

export default Register