import React, { useEffect, useMemo, useState } from "react";

const useToggle = (initialValue = true) => {
  const [toggle, setToggle] = useState(initialValue);
  useEffect(() => {
    // console.log(toggle);
  }, [toggle]);

  const handleToggle = useMemo(() => {
    return () => {
      setToggle((prev) => {
        const newVal = !prev;
        // console.log(newVal);
        return newVal;
      });
      // console.log(toggle);
    };
  }, [toggle]);
  return {
    toggle,
    handleToggle,
  };
};

export default useToggle;
