import React, { useRef, useEffect } from "react";

import "./EditorBox.scss";

const EditorBox = ({ selectedImages }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const image = new Image();
    image.onload = () => {
      // Calculate the center position
      const centerX = canvas.width / 2 - image.width / 2;
      const centerY = canvas.height / 2 - image.height / 2;

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the image at the center position
      context.fillStyle = "#fff";
      context.drawImage(image, centerX, centerY);
    };

    const resizeCanvas = () => {
      if (canvas && context) {
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        canvas.width = 400;
        canvas.height = 400;
        // You can draw on the canvas here or perform any other operations
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    // Resize canvas initially and add event listener for window resize
    resizeCanvas();
    image.src = selectedImages;

    window.addEventListener("resize", resizeCanvas);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [selectedImages]);

  return <canvas className="EditorBox" ref={canvasRef} />;
};

export default EditorBox;
