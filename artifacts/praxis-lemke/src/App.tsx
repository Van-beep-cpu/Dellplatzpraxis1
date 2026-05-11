import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Adhs from "@/pages/adhs";
import Ass from "@/pages/ass";
import Psychotherapie from "@/pages/psychotherapie";
import Schmerztherapie from "@/pages/schmerztherapie";
import Downloads from "@/pages/downloads";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/adhs" element={<Adhs />} />
              <Route path="/ass" element={<Ass />} />
              <Route path="/psychotherapie" element={<Psychotherapie />} />
              <Route path="/schmerztherapie" element={<Schmerztherapie />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
