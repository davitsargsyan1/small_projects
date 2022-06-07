import { memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({ value, stepInfoText, prevNavigation }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const inLastPage = pathname.includes("thirdPage");

  const handleBackClick = () => {
    navigate(prevNavigation);
  };

  const handleResetClick = () => {
    navigate("/");
    localStorage.removeItem("firstPageData");
    localStorage.removeItem("thirdPageData");
    localStorage.removeItem("secondPageData");
  };

  return (
    <>
      <div className="header">
        <div className="back" onClick={handleBackClick}>
          <ArrowBackIcon />
          Previous
        </div>
        <div className="progress">
          <CircularProgress
            size={64}
            value={value}
            thickness={4}
            variant="determinate"
          />
          <span>{stepInfoText}</span>
        </div>
        {inLastPage && (
          <div className="reset" onClick={handleResetClick}>
            Reset
          </div>
        )}
      </div>
      <p className="hint">Submit your personal Information</p>
    </>
  );
};

export default memo(Header);
