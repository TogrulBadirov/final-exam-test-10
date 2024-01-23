import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import NewArrivals from "../../components/NewArrivals";
import PopularItems from "../../components/PopularItems";
import WatchOfChoice from "../../components/WatchOfChoice";
import WatchOf from "../../components/WatchOf";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
   <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
      <NewArrivals/>
      <PopularItems/>
      <WatchOfChoice/>
      <WatchOf/>
    </>
  );
};

export default Home;
