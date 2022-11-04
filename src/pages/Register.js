import React, { useState } from "react";
import "../styling/login.css";
import { v4 as uuid } from "uuid";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, auth, storage } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  // register user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      // uploading file to storage
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            // update profile
            await updateProfile(user, {
              displayName: username,
              photoURL: url,
            });

            // store user details in firebase
            const userDetails = {
              displayName: username,
              uid: user.uid,
              email,
              photoURL: url,
            };
            const docRef = doc(db, "users", user.uid);
            await setDoc(docRef, userDetails);
          });
        },
        (error) => {
          console.log(error.message);
        }
      );

      setUsername("");
      setEmail("");
      setPassword("");
      setFile(null);

      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="space_products"></div>
      <div className="login_container">
        <h4 className="login_title">Sign up</h4>
        <div className="signup_form">
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            <button className="signup_btn" onClick={handleSubmit}>
              Create an account
            </button>
          </form>
          <p className="create_account">
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
