import React, { useEffect, useMemo, useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    // console.log(toggle);
  }, [toggle]);

  const handleToggle = useMemo(() => {
    return () => {
      setToggle((prev) => {
        const newVal = !prev;
        return newVal;
      });
    };
  }, []);
  const closeSidebar = () => setToggle(false);

  return {
    toggle,
    handleToggle,
    closeSidebar,
  };
};

export default useToggle;
