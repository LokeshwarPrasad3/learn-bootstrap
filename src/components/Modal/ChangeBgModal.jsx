import { bgImagesArray } from "../../data/AllBgImagesData";
import { useTheme } from "../../context/ThemeProvider";

const ChangeBgModal = ({ onClose }) => {
  const { currentBgImage, setCurrentBgImage } = useTheme();

  return (
    <div className="change_bg_modal_container d-flex flex-column align-items-center">
      <div className="bg_change_modal_heading d-flex w-100 justify-content-between align-items-center">
        <h3 className="fs-4">Change Background</h3>
        <div onClick={() => onClose()} className="fs-2 cursor-pointer">
          CX
        </div>
      </div>
      <div className="change_bg_modal_body w-100 d-flex flex-column justify-content-center align-items-center my-2 gap-2">
        <p className="text-left mb-0 w-100">Dark Backgrounds</p>
        <div className="images_container w-100 d-flex flex-wrap align-items-center gap-3">
          {bgImagesArray.map((imageURL, index) => (
            <img
              style={{
                border: `${
                  currentBgImage === imageURL
                    ? "2px solid rgb(181, 55, 90)"
                    : "none"
                }`,
              }}
              key={index}
              className="change_bg_images"
              src={imageURL}
              alt={index}
              onClick={() => setCurrentBgImage(imageURL)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangeBgModal;
