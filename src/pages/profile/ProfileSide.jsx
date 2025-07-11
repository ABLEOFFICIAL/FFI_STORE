import React, { useContext, useState } from "react";
import { User } from "../../components/molecules/NavBarMd";
import { BsBox2 } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Like } from "../discovery/DisplayProducts";
import { MdOutlinePayment } from "react-icons/md";
import { WidthContext } from "../../context/WidthContext";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  return <BsBox2 className="size-5 stroke-1" />;
};
export const Mail = () => {
  return <CiMail className="size-5 stroke-1" />;
};
export const Payment = () => {
  return <MdOutlinePayment className="size-5" />;
};

const ProfileSide = () => {
  const navigate = useNavigate();
  const { categories, setCategories } = useContext(WidthContext);
  //   const [categories, setCategories] = useState("Profile");

  const handleSelect = (item) => {
    if (item.route) {
      navigate(item.route);
    } else {
      setCategories(item.title);
    }
  };

  return (
    <div className="h-[450px] w-1/4 bg-[#4a4741] rounded-sm">
      <div className="flex flex-col gap-7 p-5">
        {[
          { title: "Profile", icon: <User /> },
          { title: "Orders", icon: <Order /> },
          { title: "Inbox", icon: <Mail /> },
          {
            title: "Wishlist",
            icon: <Like className={"size-5 stroke-1"} />,
          },
          { title: "Payment setting", icon: <Payment /> },
        ].map((item, idx) => {
          return (
            <span
              onClick={() => handleSelect(item)}
              key={idx}
              className={`flex items-center gap-3 ${
                categories == item.title
                  ? "bg-[#f7f1e8] text-[#4a4741] rounded-xl px-3 py-2"
                  : "cursor-pointer text-[#f7f1e8]"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSide;
