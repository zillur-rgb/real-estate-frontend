import About from "../components/home/About";
import Header from "../components/home/Header";
import PopularProperties from "../components/home/PopularProperties";
import WhyUs from "../components/home/WhyUs";
import Layout from "../components/shared/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <PopularProperties />
      <WhyUs />
    </Layout>
  );
};

export default Home;
