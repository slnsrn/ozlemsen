import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Meta } from "../components/Meta";
import Services from "../components/Services";
import { UnderMaintenance } from "../components/UnderMaintenance";

const Home = () => {
  return (
    <div>
      <Meta />
      <Layout>
        <Hero />
        <Services />
      </Layout>
      {/* <UnderMaintenance /> */}
    </div>
  );
};

export default Home;
