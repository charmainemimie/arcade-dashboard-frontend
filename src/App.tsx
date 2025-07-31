import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamesPage from "./pages/games/games-page";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/games" element={<GamesPage />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </Router>
  );
}

export default App;
