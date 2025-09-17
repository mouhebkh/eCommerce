import HomeBanner from "@/components/HomeBanner";
import Container from "../app/../components/Container";

export default function Home() {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
      </Container>
    </div>
  );
}
