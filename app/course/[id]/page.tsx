import { Button } from "@/components/ui/button";
import React from "react";

const CourseData = () => {
  return (
    <div className=" flex w-full ">
      <div className="rightside border-r-[1px] w-[60%]  h-full relative " >
        <h3 className=" border-b-[1px] px-8 py-3 pt-5 font-bold ">
          {" "}
          Hello I am Title
        </h3>
        <div className="pl-8">
          <p className=" mt-4  text-muted-foreground font-bold">
            {" "}
            Section 1 . Chapter 1 of 4
          </p>
          <h3 className=" mt-2 font-black text-2xl ">
            Visibily of System Status
          </h3>
          <p className="text-justify mt-4 scroll-m-2 overflow-y-auto max-w-full h-[800px] pr-5  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            magni tempore voluptatibus corporis veritatis sit aliquid natus ab
            sunt nihil culpa aspe
          </p>
        </div>
        <div className="footer bg-white sticky  bottom-0  h-20 w-full overflow-hidden border-t-[1px] flex justify-between items-center ">
          <div className="right flex  gap-3 mt-2 px-8">
            <p>Have on issue for this content ?</p>
            <p>Report an Issue</p>
          </div>
          <div className="mt-2 flex gap-4 mr-3">
            <Button type="button" variant={"outline"}>
              Back
            </Button>
            <Button type="button" variant={"default"}>
              Next Chapter
            </Button>
          </div>
        </div>
      </div>
      <div className="leftside w"></div>
    </div>
  );
};

export default CourseData;
