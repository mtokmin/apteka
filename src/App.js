import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <main className="content">
          <AppRouter />
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
