import About from "@/components/Landing/About";
import Collage from "@/components/Landing/Collage";
import HeroBanner from "@/components/Landing/HeroBanner";
import Photography from "@/components/Landing/Photography";


export default function Home() {
  return (
    <div className="">
      <HeroBanner/>
      <About/>
      <Collage/>
      <Photography/>
    </div>
  );
}
