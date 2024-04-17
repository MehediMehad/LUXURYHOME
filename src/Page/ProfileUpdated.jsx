import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const ProfileUpdated = () => {
  useEffect(()=>{
    window.scroll(0, 0)
},[])
  const { user,setUiUpUser } = useContext(AuthContext)
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [profileImgUrl, setProfileImgUrl] = useState(user?.photoURL);
  const handleSave = () => {
    return updateProfile(user, {
      displayName: displayName,
      photoURL: profileImgUrl,

    })
    .then(() => {
      setUiUpUser({
        ...user,
          displayName: displayName, 
          photoURL: profileImgUrl
      })
    })
}
  return (
    <>
      <Helmet>
        <title>Profile Updated</title>
      </Helmet>
      <div className="content-center h-screen text-center items-center">
        <div className="bg-slate-100 md:w-1/4 mx-auto rounded-md p-5 shadow-lg">
          <img className=" inline rounded-full" src={user.photoURL} alt="" />
          <h1 className="text-2xl font-bold">Hello {user?.displayName}</h1>
          <h2 className="text-2xl my-3">Update Profile</h2>
          <div className="mb-3">
            <input
              className=" w-full  p-3 rounded-md"
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
          <div className="mt-5 w-full ">
            <NavLink to='/profile' className="px-5 py-2 rounded-md bg-emerald-600 font-bold text-white" onClick={handleSave}>Update </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileUpdated;