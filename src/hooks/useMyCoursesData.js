import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MY_COURSES_URL } from "../utils/constants";
const fetchMyCourses = () => {
  return axios.get(MY_COURSES_URL);
};

export const useMyCoursesData = (onSuccess, onError) => {
  return useQuery(["my-courses"], () => fetchMyCourses(), {
    onSuccess,
    onError,
    refetchOnMount: true,
  });
};
