import Hero from "../components/Hero";
import { Meta } from "../components/Meta";
import Services from "../components/Services";
import { UnderMaintenance } from "../components/UnderMaintenance";

const Home = () => {
  return (
    <div>
      <Meta />
      <Hero />
      <Services />
      {/* <UnderMaintenance /> */}
    </div>
  );
};

export default Home;
