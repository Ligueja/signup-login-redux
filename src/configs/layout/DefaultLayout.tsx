import { Stack } from "@mui/material";
import { Navbar } from "../../components/functionals/Navbar";
import { Footer } from "../../components/functionals/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Stack spacing={2} alignItems='center'>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}
