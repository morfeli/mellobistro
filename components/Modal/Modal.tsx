import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SetStateAction } from "react";

import ReactDOM from "react-dom";

type ModalProps = {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  show: boolean;
  item: StaticImageData | null;
};

export const Modal = ({ show, onClose, item }: ModalProps) => {
  const [sendPortal, sentSendPortal] = useState(false);

  useEffect(() => {
    sentSendPortal(true);
  }, []);

  let modalContent = show ? (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen bg-overLay">
      <div className="flex flex-col items-center px-4 py-2 m-6 bg-white rounded-md justify-evenly sm:w-75vw">
        {item && (
          <div className="m-2">
            <Image
              src={item}
              width={375}
              height={375}
              className="rounded-md"
              alt="Image"
            />
            <p>Enter image description here</p>
          </div>
        )}
        <button
          onClick={onClose}
          className="px-8 py-2 text-white rounded-md bg-hunter-green"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;

  if (sendPortal) {
    const portalDiv = document.getElementById("modal-root")!;

    return ReactDOM.createPortal(modalContent, portalDiv);
  } else {
    return null;
  }
};
