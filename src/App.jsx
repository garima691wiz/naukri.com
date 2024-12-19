import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

// Regularly imported components
import Wrapper from "./components/layout/Wrapper";
import Protected from "./components/auth/Protected";
import SomethingWentWrong from "./pages/SomethingWentWrong";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/HomePage"));
const JobsPage = lazy(() => import("./pages/JobsPage"));
const JobDetailsPage = lazy(() => import("./pages/JobDetailsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Router future={{ relativeSplatPath: true }}>
      <ErrorBoundary FallbackComponent={SomethingWentWrong}>
        <Wrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
              <Route path="/naukariServices" element={<ServicesPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route
                path="/user/profile"
                element={
                  <Protected>
                    <ProfilePage />
                  </Protected>
                }
              />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Wrapper>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
