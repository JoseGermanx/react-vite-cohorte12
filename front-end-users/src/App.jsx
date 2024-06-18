import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "./components/Login";
import Registro from "./components/Registro";
import Perfil from "./components/Perfil";

function App() {
  return (
    <GoogleOAuthProvider clientId="600660991061-00r5n56uacsbeu9co7d9arhfofh684tu.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Perfil />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
