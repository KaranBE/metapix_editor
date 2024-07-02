import Request from "./../../utils/http.service";

export const fetchCategories = () => {
  return Request({
    method: "GET",
    url: "/search/category_list?from=0",
  }).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
  });
};
