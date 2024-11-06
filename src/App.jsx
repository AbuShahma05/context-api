import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-gray-500 m-4 p-4 text-white font-bold">
        You are viewing the Context API content below
      </h1>
      <br />
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
