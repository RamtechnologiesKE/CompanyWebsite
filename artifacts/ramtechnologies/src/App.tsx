import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { DemoModal } from "@/components/DemoModal";
import { DemoModalProvider } from "@/context/DemoModalContext";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DemoModalProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <DemoModal />
          <WhatsAppWidget />
          <Toaster />
        </DemoModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
