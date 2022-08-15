import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMyCourses = () => {
  return axios.get(
    "https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses"
  );
};

export const useMyCoursesData = (onSuccess, onError) => {
  return useQuery(["my-courses"], () => fetchMyCourses(), {
    onSuccess,
    onError,
    refetchOnMount: true,
  });
};
