import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { initConversionTracking } from "./lib/tracking";
import MaintenancePage from "./components/MaintenancePage";
import { AppProviders, RoutedApp } from "./AppShell";

// ⚠️ Set to false to bring the site back online
const MAINTENANCE_MODE = false;

const App = () => {
  useEffect(() => {
    initConversionTracking();
  }, []);

  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <AppProviders>
      <BrowserRouter basename="/">
        <RoutedApp />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
