import { createContext, useContext, useState } from "react";

interface DemoModalContextType {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | null>(null);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <DemoModalContext.Provider
      value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}
    >
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}
