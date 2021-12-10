import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./pages/LoginForm";
import { Container, Button, Alert, Card, Form } from "react-bootstrap";

function App() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="">
      <header className="">
        <LoginForm />
        {/* ============================================================================ */}
      </header>
    </div>
  );
}

export default App;
