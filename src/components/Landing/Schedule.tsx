import { crismonText, moglanDemo } from "@/app/font";
import CalendlyWidget from "./CalendaryWedget";

const Schedule = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <p className={`${moglanDemo.className} text-5xl`}>SCHEDULE A MEETING</p>
        <p className={`${crismonText.className}`}>
          Schedule a meeting and let&apos;s chat about how we can make that
          happen together!
        </p>
      </div>
      <div className="flex justify-center mt-4 lg:mt-10 lg:mb-10 h-[50rem] lg:h-[45rem]">
        <CalendlyWidget />
      </div>
    </div>
  );
};

export default Schedule;
