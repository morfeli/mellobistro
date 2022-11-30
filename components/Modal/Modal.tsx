import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

import ReactDOM from "react-dom";

type ModalProps = {
  children?: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  show: boolean;
  item?: StaticImageData | null;
};

export const Modal = ({ show, onClose, item, children }: ModalProps) => {
  const [sendPortal, sentSendPortal] = useState(false);

  useEffect(() => {
    sentSendPortal(true);
  }, []);

  let modalContent = show ? (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen bg-overLay">
      <div className="flex flex-col items-center py-8 m-4 bg-white rounded-md justify-evenly md:p-12">
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
        {children && (
          <div className="p-8 text-center">
            <p className="text-lg">{children}</p>
          </div>
        )}
        <motion.button
          onClick={onClose}
          className="px-8 py-2 text-white rounded-md bg-hunter-green"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, opacity: 0.7 }}
        >
          Close
        </motion.button>
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
