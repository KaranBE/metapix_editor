import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSubCategories } from "../../store/actions/subCategories";
import { saveSubCategoriesData } from "../../store/reducers/subCategoriesReducer";

import "./CategoryPanel.scss";

const CategoryPanel = ({ updateSelectedImages }) => {
  const subCategories = useSelector((state) => state.subCategories.data);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const categoriesData = await fetchSubCategories();
    dispatch(saveSubCategoriesData(categoriesData.result));
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="CategoryPanel">
      <div className="CategoryPanel-itemsContainer">
        <ul className="CategoryPanel-itemsContainer__listItems">
          {subCategories?.map((item) => (
            <li
              key={item.id}
              className="CategoryPanel-itemsContainer__listItems--item"
            >
              <div className="icon-container d-flex justify-center align-center">
                <img
                  alt={item.name}
                  src={item.thumbnail_image}
                  onClick={() => updateSelectedImages(item.thumbnail_image)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPanel;
