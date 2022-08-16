import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourseCategories = (link) => {
  return axios.get(link);
};

export const useCourseCategoriesData = (link) => {
  return useQuery(
    ["course-categories", link],
    () => fetchCourseCategories(link),
    { refetchOnWindowFocus: false }
  );
};
