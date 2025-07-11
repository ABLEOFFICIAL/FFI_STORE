import React from "react";

const ProfileCard = ({ children }) => {
  return (
    <div className="border-[1px] border-[#4a4741] rounded-xl h-[250px] w-full">
      {children}
    </div>
  );
};

export default ProfileCard;
