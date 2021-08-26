import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d9cb1eea-62ee-4ec1-9b90-8d98874b8867/7ac0addb-1541-413a-9b6e-f4f5b38e9c4f/VN-vi-20210817-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <Featured />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
