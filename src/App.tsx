import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Component wrapper for page transitions
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccountPage from "./components/AccountPage";
import Product from "./pages/Product";
import Company from "./pages/Company";
import Support from "./pages/Support";
import Legal from "./pages/Legal";
import Status from "./pages/Status";
import API from "./pages/API";
import Help from "./pages/Help";
import About from "./pages/About";
import License from "./pages/License";
import Careers from "./pages/Careers";
import PressKit from "./pages/PressKit";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Marketplace from "./pages/Marketplace";
import Advanced from "./pages/Advanced";
import Download from "./pages/Download";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/company" element={<Company />} />
            <Route path="/support" element={<Support />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/status" element={<Status />} />
            <Route path="/api" element={<API />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
            <Route path="/license" element={<License />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/advanced" element={<Advanced />} />
            <Route path="/download" element={<Download />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
