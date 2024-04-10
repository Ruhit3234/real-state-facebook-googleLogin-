import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInWithGoogle, signInWithFacebook, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password);
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      toast.error('Invalid user credentials');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      toast.error('Google login failed');
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithFacebook();
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      toast.error('Facebook login failed');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">Don't have any account?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Login</button>
              <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-xl  text-center">or</h2>

                <button className="btn btn-outline w-full" onClick={handleGoogleLogin}>
                  <i className="fab fa-google"></i> Google
                </button>
                <button className="btn btn-outline w-full" onClick={handleFacebookLogin}>
                  <i className="fab fa-facebook"></i> Facebook
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default Login;
