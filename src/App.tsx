import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Episodes from "./pages/Episodes";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import EpisodeDetail from "./pages/EpisodeDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Episode detail routes */}
          <Route
            path="/saison/:seasonId/episode/:episodeId"
            element={
              <>
                <Index />
                <EpisodeDetail />
              </>
            }
          />
          <Route
            path="/episodes/:seasonId/episode/:episodeId"
            element={
              <>
                <Episodes />
                <EpisodeDetail />
              </>
            }
          />
          <Route path="/episodes" element={<Episodes />} />

          <Route path="/about" element={<About />} />
          {/* Placeholder routes - these will be implemented later */}
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
