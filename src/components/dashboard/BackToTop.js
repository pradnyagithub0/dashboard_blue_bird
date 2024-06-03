import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BackToTop = () => {
  const [isVisibleBackBtn, setIsVisibleBackBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        // Adjust this value to determine when the button appears
        setIsVisibleBackBtn(true);
      } else {
        setIsVisibleBackBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`back-to-top-btn ${isVisibleBackBtn ? "visible" : ""}`}>
      <button className="btn" onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </button>
    </div>
  );
};

export default BackToTop;
