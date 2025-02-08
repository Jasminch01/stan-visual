import About from "@/components/Landing/About";
import HeroBanner from "@/components/Landing/HeroBanner";
import Photography from "@/components/Landing/Photography";


export default function Home() {
  return (
    <div className="">
      <HeroBanner/>
      <About/>
      <Photography/>
    </div>
  );
}
