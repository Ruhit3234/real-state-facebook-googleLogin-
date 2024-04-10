import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserProfile = ({user}) => {
  const {logOut } = useContext(AuthContext)
  const{displayName,photoURL} = user;

  const handleLogOut = async()=>{
       try{
           await logOut();
           toast.success("User logged out successfully");
    
       }catch(err){
             toast.error(err.message);
       }
  }

  return (
     <>
     <ToastContainer/>
       <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" title={displayName} src={photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>

        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div>
     </>
  )
}

export default UserProfile