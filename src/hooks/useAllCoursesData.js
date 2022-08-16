import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ALL_COURSES_URL } from "../utils/constants";

const fetchAllCourses = () => {
  return axios.get(ALL_COURSES_URL);
};

export const useAllCoursesData = (onSuccess, onError) => {
  return useQuery(["all-courses"], () => fetchAllCourses(), {
    onSuccess,
    onError,
    refetchOnMount: true,
  });
};
