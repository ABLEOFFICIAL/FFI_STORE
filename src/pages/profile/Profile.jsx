import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../discovery/Header";
import Footer from "../../components/organism/Footer";
import ProfileSide from "./ProfileSide";
import MainProfile from "./MainProfile";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        navigate("/CreateAcct");
      }
      return () => unsubscribe();
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="max-w-[1150px] mx-auto flex gap-5 my-7">
        <ProfileSide />
        <MainProfile />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
