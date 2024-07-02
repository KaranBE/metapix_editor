import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "../../store/actions/categories";
import { saveCategories } from "../../store/reducers/categoriesReducer";

import "./LeftPanel.scss";

const LeftPanel = () => {
  const categories = useSelector((state) => state.categories.data);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const categoriesData = await fetchCategories();
    dispatch(saveCategories(categoriesData.results));
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="LeftPanel">
      <ul className="LeftPanel-listItems">
        {categories?.map((item) => (
          <li key={item.id} className="LeftPanel-listItems__item">
            <div className="d-flex flex-col align-center mb-6">
              <div className="icon-container">
                <img
                  className="mb-1"
                  alt={item.id}
                  // src="../../assets/svg/stickers.svg"
                  // src={item.src}
                />
              </div>
              <span>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;
