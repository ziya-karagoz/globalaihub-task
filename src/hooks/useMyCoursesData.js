import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MY_COURSES_URL } from "../utils/constants";
const fetchMyCourses = () => {
  return axios.get(MY_COURSES_URL);
};

export const useMyCoursesData = (onSuccess, onError, filterParams) => {
  const { searchKeywords } = filterParams;
  return useQuery(["my-courses"], () => fetchMyCourses(), {
    onSuccess,
    onError,
    refetchOnMount: true,
    select: (data) => {
      let filteringData = data.data;
      if (searchKeywords) {
        filteringData = filteringData.filter((course) =>
          course.title.toLowerCase().includes(searchKeywords.toLowerCase())
        );
      }
      return filteringData;
    },
  });
};
