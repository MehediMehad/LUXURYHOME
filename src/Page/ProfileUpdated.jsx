import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const ProfileUpdated = () => {
  const { user } = useContext(AuthContext)
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [profileImgUrl, setProfileImgUrl] = useState(user?.photoURL);
  const handleSave = () => {
     return updateProfile(user, {
        displayName: displayName,
        photoURL: profileImgUrl,
      });
    }
  return (
    <div className="content-center h-screen text-center items-center">
      <div className="bg-rose-500 md:w-1/4 mx-auto rounded-md p-5">
      <h1 className="text-2xl font-bold">Hello {user?.displayName}</h1>
      <h2 className="text-2xl my-3">Update Profile</h2>
      <div className="mb-3">  
      <input
        className=" w-full p-3 rounded-md"
        type="text"
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      </div>
      <input
        className="w-full p-3 rounded-md"
        type="text"
        placeholder="Profile Image URL"
        value={profileImgUrl}
        onChange={(e) => setProfileImgUrl(e.target.value)}
      />
      <div className="mt-2 w-full">

      <button className="px-5 py-2 rounded-md bg-slate-700" onClick={handleSave}>Update </button>
      </div>
      </div>
    </div>
  );
}

export default ProfileUpdated;