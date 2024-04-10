import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
// import { data } from 'autoprefixer';

export const AuthContext = createContext(null)
// social auth providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);
    const [houses, setHouses] = useState([])

    // lord data 
    useEffect(() => {
        fetch('residential.json')
        .then((res) => res.json())
        .then((data) =>{
            setHouses(data)
        })
    }, [])


    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleLogin =() =>{
        return signInWithPopup(auth, googleProvider)
    }
    //gitHub login
    const githubLogin =() =>{
        return signInWithPopup(auth, githubProvider)
    }

    //LogOut
    const logOut = () => {
        return signOut(auth);
    }
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(createUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        googleLogin,
        githubLogin,
        houses,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;