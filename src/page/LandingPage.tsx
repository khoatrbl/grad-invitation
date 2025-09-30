import Header from "../components/Header";
import Pufferfish from "../components/Pufferfish";

export default function LandingPage() {
  return (
    <>
      <div className="sticky">
        <Header />
      </div>

      <div className="flex justify-center align-middle">
        <Pufferfish />
      </div>
    </>
  );
}
