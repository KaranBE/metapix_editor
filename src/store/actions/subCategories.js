// /search/stickers-bysubcategoryid/?subcategory_id=15&from=0

import Request from "./../../utils/http.service";

export const fetchSubCategories = () => {
  return Request({
    method: "GET",
    url: "/search/stickers-bysubcategoryid?subcategory_id=15&from=0",
  }).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
  });
};
