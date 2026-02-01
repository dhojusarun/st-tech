import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  // While checking login
  if (isLoading) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  // If NOT logged in → go to Auth0 login
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  // If logged in → show page
  return children;
}

export default ProtectedRoute;