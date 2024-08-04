import { useState } from "react";
import ChangeBgModal from "./Modal/ChangeBgModal";

const ChangeBgSection = () => {
  const [showBgChangeModal, setShowBgChangeModal] = useState(false);

  return (
    <>
      <div className="change_bg_container">
        <img
          onClick={() => setShowBgChangeModal(!showBgChangeModal)}
          className="icons"
          src="/public/change_bg_image.webp"
        />
      </div>
      {showBgChangeModal && (
        <ChangeBgModal
          onClose={() => setShowBgChangeModal(!showBgChangeModal)}
        />
      )}
    </>
  );
};

export default ChangeBgSection;
