import React from "react";
import { AuthModal } from "../Modals/AuthModal";
import "./css/MainPage.css";

// gt-super, Georgia, Cambria, "Times New Roman", Times, serif

const MainPage = ({ signInPopup }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-content">
          <div className="a">
            <h3>Stay curious.</h3>
          </div>
          <div className="a1">
            <h3>
              Discover stories, thinking, and expertise <br /> from writers on
              any topic.
            </h3>
          </div>
          <div className="a2">
            <button onClick={() => setModal(true)}>Start Reading</button>
          </div>
        </div>
      </div>
      <div>
        <AuthModal signInPopup={signInPopup} open={modal} setOpen={setModal} />
      </div>
    </div>
  );
};

export default MainPage;
