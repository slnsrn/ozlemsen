import { GetServerSideProps } from "next";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Meta } from "../components/Meta";
import Services from "../components/Services";
import { UnderMaintenance } from "../components/UnderMaintenance";

const supportedLanguages = ["en", "de"];
const Home = ({ isMobile = false }: { isMobile: boolean }) => {
  return (
    <div>
      {/* <Meta />
      <Layout>
        <Hero />
        <Services />
      </Layout> */}
      <UnderMaintenance />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA?.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      isMobile,
    },
  };
};
