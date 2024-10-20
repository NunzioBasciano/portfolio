import Image from "next/image";
import { cardList } from "../common/cardList";
import Button from "../components/Button";
import MainLayout from "../components/MainLayout";
import ArticleGenerator from "../components/ArticleGenerator";
import { aboutMe } from "../common/aboutMeArticle";

function AboutMe() {
  return (
    <>
      <MainLayout layout="md:grid-cols-5 md:grid-rows-3">
        {/*  */}
        <div className="relative w-[90%] mx-auto h-64 md:h-auto md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
          <Image
            src="/nunzioBasciano-foto.jpg"
            alt="Foto di Nunzio Basciano"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <ArticleGenerator
          title={aboutMe.title}
          subTitle={aboutMe.subTitle}
          paragraphs={aboutMe.paragraphs}
          layout="md:col-span-3 md:row-span-3"
        ></ArticleGenerator>
      </MainLayout>
      <div className="my-3">
        <h2 className="py-3 text-white text-2xl font-semibold text-center">
          Skill-set
        </h2>
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 custom-grid-rows gap-3 ">
            {cardList.map((item, index) => (
              <div
                key={index}
                className=" p-6 shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl w-full "
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="my-6"
                />
                <h3 className="text-2xl mb-3 text-[var(--orange)]">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <Button downloadCV={true} label="Scarica CV" />
            <Button link="/my-project" label="Progetti" />
            <Button link="/contact" label="Contatti" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
