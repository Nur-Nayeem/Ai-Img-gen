import { CgClose } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";

const ShowImage = ({ modalRef, imageUrl }) => {
  const downloadImage = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-transparent w-full max-w-7xl md:h-screen relative">
        <img src={imageUrl} alt="image" className="w-full h-full" />

        <div className="modal-action">
          <form method="dialog">
            <button className="absolute z-50 top-10 right-10 text-gray-700 hover:text-gray-900 transition-colors">
              <CgClose className="text-2xl cursor-pointer" />
            </button>
          </form>
        </div>

        <button
          onClick={downloadImage}
          className="absolute top-10 left-10 text-gray-700 hover:text-gray-900"
        >
          <FaDownload className="text-2xl cursor-pointer" />
        </button>
      </div>
    </dialog>
  );
};

export default ShowImage;
