import About from "@/components/Landing/About";
import Brand from "@/components/Landing/Brand";
import Collage from "@/components/Landing/Collage";
import HeroBanner from "@/components/Landing/HeroBanner";
import Photography from "@/components/Landing/Photography";
import SpcialDay from "@/components/Landing/SpcialDay";
import Strories from "@/components/Landing/Strories";


export default function Home() {
  return (
    <div className="">
      <HeroBanner/>
      <About/>
      <Collage/>
      <Strories/>
      <Photography/>
      <SpcialDay/>
      <Brand/>
    </div>
  );
}
