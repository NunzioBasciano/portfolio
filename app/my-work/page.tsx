import React from "react";
import Image from "next/image";
import { projectList } from "../common/projectList";
import ImageComponent from "../components/ImageComponent";
import Card from "../components/Card";

function MYWork() {
  return (
    <div className="my-3">
      <h2 className="py-3 text-white text-2xl font-semibold text-center">
        I miei progetti
      </h2>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 custom-grid-rows gap-3 ">
          {projectList.map((item, index) => (
            <Card
              index={index}
              icon={item.icon}
              title={item.title}
              paragraphs={item.paragraphs || []}
              layout={true}
              smallIcon={item.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MYWork;
