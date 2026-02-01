import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-blue-600 text-white p-3 rounded"
    >
      Log In
    </button>
  );
}

export default LoginButton;