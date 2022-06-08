import {useState, useEffect} from 'react'
function Register() {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        pasword: '',
        password2: ''
    })
  return (
    <div>Register</div>
  )
}

export default Register