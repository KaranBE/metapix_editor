import React, { useRef, useEffect } from "react";
import { getMeta } from "../../utils/getAssetDetails";

import "./EditorBox.scss";

const EditorBox = ({ selectedImages }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();

    getMeta(selectedImages, (err, img) => {
      const centerX = canvas.width / 2 - image.width / 2;
      const centerY = canvas.height / 2 - image.height / 2;
      // context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        image,
        centerX,
        centerY,
        img?.naturalWidth,
        img?.naturalHeight
      );
    });

    context.fillStyle = "#fff";
    image.src = selectedImages;
  }, [selectedImages]);

  return <canvas className="EditorBox" ref={canvasRef} />;
};

export default EditorBox;
