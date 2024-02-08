import { timelineData } from "@/components/timeline-data";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TimelineMobile = () => {
  return (
    <>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="mb-8 flex justify-between flex-col items-center w-full"
        >
          <div className="w-full px-1 py-4 text-center">
            <p className="mb-3 text-base text-yellow-300">{item.date}</p>
            <h4 className="mb-3 font-bold text-lg md:text-2xl">{item.title}</h4>
            <p className="text-sm md:text-base leading-snug text-gray-400 text-opacity-100">
              {item.description}
            </p>
          </div>
          <div className="w-full flex h-56 justify-center bg-black rounded-xl p-10 border hover:cursor-pointer hover:transition-opacity hover:opacity-30">
            <Image src={item.image} alt={item.alt} width="150" height="150" />
          </div>
        </div>
      ))}
      <div className="flex justify-center mb-10">
        <Button variant="outline" className="w-80 h-11">
          View Projects
        </Button>
      </div>
    </>
  );
};

export default TimelineMobile;
