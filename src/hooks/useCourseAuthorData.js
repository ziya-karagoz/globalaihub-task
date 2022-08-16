import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourseAuthor = (link) => {
  return axios.get(link);
};

export const useCourseAuthorData = (link) => {
  return useQuery(["course-author", link], () => fetchCourseAuthor(link), {
    refetchOnWindowFocus: false,
  });
};
