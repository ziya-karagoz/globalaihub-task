import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourseMedia = (link) => {
  return axios.get(link);
};

export const useCourseMediaData = (link) => {
  return useQuery(["course-media", link], () => fetchCourseMedia(link), {
    refetchOnWindowFocus: false,
  });
};
