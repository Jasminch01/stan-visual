import About from "@/components/Landing/About";
import Brand from "@/components/Landing/Brand";
import Collage from "@/components/Landing/Collage";
import HeroBanner from "@/components/Landing/HeroBanner";
import Photography from "@/components/Landing/Photography";
import Schedule from "@/components/Landing/Schedule";
import SpcialDay from "@/components/Landing/SpcialDay";
import Strories from "@/components/Landing/Strories";
import Testimonial from "@/components/Landing/Testimonial";


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
      <Testimonial/>
      <Schedule/>
    </div>
  );
}
