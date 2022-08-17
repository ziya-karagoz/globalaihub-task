import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ALL_COURSES_URL } from "../utils/constants";

const fetchAllCourses = () => {
  return axios.get(ALL_COURSES_URL);
};

export const useAllCoursesData = (onSuccess, onError, filterParams) => {
  const { searchKeywords } = filterParams;
  return useQuery(["all-courses"], () => fetchAllCourses(), {
    onSuccess,
    onError,
    refetchOnMount: true,
    select: (data) => {
      let filteringData = data.data;
      if (searchKeywords) {
        filteringData = filteringData.filter((course) =>
          course.title.rendered
            .toLowerCase()
            .includes(searchKeywords.toLowerCase())
        );
      }
      return filteringData;
    },
  });
};
