import{ useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(photoURL, displayName);
      toast.success('Profile updated successfully');
      console.log(user);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <ToastContainer />
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Your name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-indigo-500"
              placeholder="URL to your photo"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile ;
