import { Container } from "@mui/material";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl">
        <Header />
        <h1>Home</h1>
      </Container>
    </main>
  );
}
