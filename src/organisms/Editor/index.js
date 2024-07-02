import { useState } from "react";

import CategoryPanel from "../../molecules/CategoryPanel";
import EditorBox from "../../molecules/EditorBox";
import Header from "../../molecules/Header/Header";
import LeftPanel from "../../molecules/LeftPanel";

import "./Editor.scss";

const Editor = () => {
  const [selectedImages, setSelectedImages] = useState("");

  const updateSelectedImages = (selectedImage) => {
    setSelectedImages(selectedImage);
  };

  return (
    <div className="Editor">
      <Header />
      <div className="Editor-container">
        <LeftPanel />
        <CategoryPanel updateSelectedImages={updateSelectedImages} />
        <EditorBox selectedImages={selectedImages} />
      </div>
    </div>
  );
};

export default Editor;
