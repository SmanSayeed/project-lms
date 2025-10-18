import React from "react";

export default function HeroCourseInfo() {
  return (
    <div className=" mt-12">
      <div className="flex flex-row items-center gap-x-15">
        {courseInfo.map((course) => (
          <div key={course.id} className="">
            <h1 className=" text-4xl relative font-bold opacity-90">
              <span
                className={`${
                  (course.color === "yellow" &&
                    "bg-yellow-200 dark:bg-yellow-200/60") ||
                  (course.color === "pink" &&
                    "bg-pink-200 dark:bg-pink-200/60") ||
                  (course.color === "green" &&
                    "bg-green-200 dark:bg-green-200/60")
                } absolute w-8 h-8 top-0 -left-2 -z-50 rounded-full`}
              ></span>
              {course.number}
              {course.id === 3 ? " T" : "+"}
            </h1>
            <p className=" mt-3 text-sm font-medium opacity-80">
              {course.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const courseInfo = [
  { id: 1, title: "Trainer", number: 10, color: "yellow" },
  { id: 2, title: "Interested", number: 6000, color: "pink" },
  {
    id: 3,
    title: "Number of seats",
    number: 950,
    color: "green",
  },
];
