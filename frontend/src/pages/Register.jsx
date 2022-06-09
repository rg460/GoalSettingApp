import {useState, useEffect} from 'react'
function Register() {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        pasword: '',
        password2: ''
    })
    const {name, email, password,password2} = formData
  return (
    <div>Register</div>
  )
}

export default Register