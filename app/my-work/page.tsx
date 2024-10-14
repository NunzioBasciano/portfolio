import React from "react";
import Image from "next/image";
import { projectList } from "../common/projectList";
import ImageComponent from "../components/ImageComponent";

function page() {
  return (
    <div className="my-3">
      <h2 className="py-3 text-white text-2xl font-semibold text-center">
        I miei progetti
      </h2>
      <div>
        <div className="flex justify-center flex-wrap mx-auto gap-3 p-3">
          {projectList.map((item, index) => (
            <div
              key={index}
              className="p-3 shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl w-full md:w-[300px] flex flex-col h-auto"
            >
              {/* Immagine con altezza fissa */}
              <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                <Image
                  src={item.icon}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Contenuto testo (titolo e descrizione) */}
              <div>
                <h3 className="text-2xl mb-3 text-[var(--orange)] h-[80px] flex items-center">
                  {item.title}
                </h3>
                <p>{item.lightDescription}</p>
              </div>

              {/* Usa "mt-auto" per spingere le tecnologie in basso */}
              <div className="flex gap-3 mt-3 justify-center h-6">
                {item.technologies.map((tech, index) => (
                  <ImageComponent key={index} src={tech.src} alt={tech.title} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
