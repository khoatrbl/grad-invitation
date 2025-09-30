import Header from "../components/Header";
import Pufferfish from "../components/Pufferfish";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center align-middle overflow-hidden">
        <Pufferfish />
      </div>
    </>
  );
}
