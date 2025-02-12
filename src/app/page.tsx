import About from "@/components/Landing/About";
import Collage from "@/components/Landing/Collage";
import HeroBanner from "@/components/Landing/HeroBanner";
import Photography from "@/components/Landing/Photography";
import Strories from "@/components/Landing/Strories";


export default function Home() {
  return (
    <div className="">
      <HeroBanner/>
      <About/>
      <Collage/>
      <Strories/>
      <Photography/>
    </div>
  );
}
