import Body from "../components/Home Page/Body";
import {BackgroundBeams} from "../components/Home Page/BackgroundBeams";

function Home({ onScroll }) {
  return (
    <div className="bg-black h-screen w-screen">
    
    <Body onScroll={onScroll} />
    <BackgroundBeams/>
    </div>
  );
}

export default Home;
