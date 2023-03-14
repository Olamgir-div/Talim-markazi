import React,{useState} from 'react'
import img2 from '../Images/svg/image2.svg'
import google from '../Images/icons/google.png'
import linkedin from '../Images/icons/linkedin.png'
import github from '../Images/icons/github.png'
import facebook from '../Images/icons/facebook.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
  
function StudentAdd() {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:5000/student/add", user)
      .then((res) => {
        console.log(res.data);
        navigate('/')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='register-div'>
        <div className='container-register'>
            <div className='style-img'>
                <div className='style-for-1' id='div-1'></div>
                <div className='style-for-1' id='div-2'></div>
                <img src={img2} alt="404" />
            </div>
            <div className='inputs-for-div'>
              <div className='text'>
                <h1>Student<span>ADD</span></h1>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" name='firstname' placeholder='FirstName'onChange={handleChange} />
                <input type="text" name='lastname' placeholder='Lastname'onChange={handleChange} />
                <input type="email" name='email' placeholder='Email'onChange={handleChange} />
                <input type="password" name='password' placeholder='Password'onChange={handleChange} />
                <div className='text-social'>
                  <div></div><p> or </p><div></div>
                </div>
                <div className='social-media-icons'>
                  <img src={google} alt="404" />
                  <img src={linkedin} alt="404" />
                  <img src={github} alt="404" />
                  <img src={facebook} alt="404" />
                </div>
                <button id='submit'>Submit</button>
              </form>
            </div>
            <div className='text-for-style'>
                <h1>Frontend<span>G6</span></h1>
            </div>
        </div>
    </div>
  )
}

export default StudentAdd