import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// devtool for debugging react-query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// route component imports
import { MyCourses } from "./components/pages/MyCourses/MyCourses";
import { AllCourses } from "./components/pages/AllCourses/AllCourses";
import { ErrorPage } from "./components/pages/ErrorPage/ErrorPage";
import { Navbar } from "./components/Navbar/Navbar";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<AllCourses />} />
            <Route path='my-courses' element={<MyCourses />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
      </QueryClientProvider>
    </>
  );
}

export default App;
