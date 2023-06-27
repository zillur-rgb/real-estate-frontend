import About from "../components/home/About";
import Header from "../components/home/Header";
import PopularProperties from "../components/home/PopularProperties";
import Layout from "../components/shared/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <PopularProperties />
    </Layout>
  );
};

export default Home;
