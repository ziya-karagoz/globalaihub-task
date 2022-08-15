import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllCourses = () => {
  return axios.get(
    "https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses"
  );
};

export const useAllCoursesData = (onSuccess, onError) => {
  return useQuery(["all-courses"], () => fetchAllCourses(), {
    onSuccess,
    onError,
    refetchOnMount: true,
  });
};
