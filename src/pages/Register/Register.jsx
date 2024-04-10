import   { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style.css';
import { AuthContext } from '../../providers/AuthProvider';
import {  useNavigate } from 'react-router-dom';

const Register = () => {

  const {createUser,user} = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
        if(user){
             navigate("/")
        }
  },[navigate,user]);
  
  const [photoUrl, setPhotoUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const reset = ()=>{
     setPhotoUrl('')
     setEmail('')
     setName('')
     setPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRequirement = password.length >= 6;

    if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !lengthRequirement) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
      return;
    }
    createUser(photoUrl, name, email, password)
    .then(result => {
      toast.success('Registration successful!');
      console.log(result.user)
      reset()
    })
    .catch(error => {
      const errorMessage = error.message;
   
      toast.error("User already exist with this email");
    })
    
 
  };

  

  return (
    <>
       <ToastContainer />
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4 text-center">Register Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control my-4">
          <label htmlFor="photoUrl" className="label">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control my-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered"
              required
              
            />

       <span
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="kodu"
        >
          {showPassword ? <i class="fa-solid fa-eye"></i> :<i class="fa-solid fa-eye-slash"></i>}
        </span>     
             
 
        </div>
        <label className="label">
                      <a to="/login">
                         <Link to="/login" className="label-text-alt link link-hover">Already Have account?</Link>
                      </a>
                   
       </label>
        <div className="form-control my-4">
          <button type="submit" className="btn btn-info">
            Register
          </button>
        </div>
 
         </form>
    </div>
    </>

  );
};

export default Register;