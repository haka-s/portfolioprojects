import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  HomeObjOne,
  HomeObjThree,
  HomeObjTwo,
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar/Index';
import Sidebar from '../components/Sidebar/Index';
import Projects from '../components/Projects/Index';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sidebar />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <Projects />
    </>
  );
};

export default Home;
