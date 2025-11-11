import React, { useReducer } from "react";

// ✅ Step 1: Define initial state
const initialState = {
  email: "",
  password: "",
  loading: false,
  message: "",
};

// ✅ Step 2: Reducer function to handle all state transitions
function reducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

// ✅ Step 3: Component using useReducer
const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Simulate login API
  const handleLogin = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_MESSAGE", payload: "" });

    // fake async request
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
      if (state.email === "admin@example.com" && state.password === "1234") {
        dispatch({ type: "SET_MESSAGE", payload: "✅ Login successful!" });
      } else {
        dispatch({
          type: "SET_MESSAGE",
          payload: "❌ Invalid email or password.",
        });
      }
    }, 1500);
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "20px",
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "50px auto",
      }}
    >
      <h3 style={{ textAlign: "center" }}>🔐 Login Form (useReducer)</h3>

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            borderRadius: "4px",
            border: "1px solid #aaa",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Password:</label>
        <input
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          placeholder="Enter password"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            borderRadius: "4px",
            border: "1px solid #aaa",
          }}
        />
      </div>

      <button
        onClick={handleLogin}
        disabled={state.loading}
        style={{
          width: "100%",
          padding: "8px",
          backgroundColor: state.loading ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {state.loading ? "Logging in..." : "Login"}
      </button>

      {state.message && (
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          {state.message}
        </p>
      )}
    </div>
  );
};

export default LoginForm;
