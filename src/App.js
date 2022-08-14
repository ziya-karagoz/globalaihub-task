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
import { MyCourses } from "./components/macros/MyCourses/MyCourses";
import { AllCourses } from "./components/macros/AllCourses/AllCourses";
import { ErrorPage } from "./components/macros/ErrorPage/ErrorPage";
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
