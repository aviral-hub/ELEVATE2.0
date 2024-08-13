import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import FAQData from "./FAQData";
import { Button } from "@mantine/core";
import { Space_Grotesk } from "next/font/google";
import RedBubble from "../../public/green bubbles.svg";
import YellowBubble from "../../public/green bubbles (1).svg";
import BlueBubble from "../../public/green bubbles (2).svg";
import GreenBubble from "../../public/green bubbles (3).svg";
import SponsorDecor from "../../public/Group 43.svg";

const Space = Space_Grotesk({ weight: "700", subsets: ["latin"] });
const Space400 = Space_Grotesk({ weight: "400", subsets: ["latin"] });

const FAQ = () => {
  const colorClasses = {
    red: "bg-red-300",
    blue: "bg-blue-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
  };
  const imageClasses = {
    red: RedBubble,
    blue: BlueBubble,
    yellow: YellowBubble,
    green: GreenBubble,
  };
  const items = FAQData.map((props, i) => (
    <Accordion type="single" collapsible key={props.key}>
      <AccordionItem className="rounded-xl border-bottom bg-[#18191b]" value={props.question}>
        <AccordionTrigger className={`text-white text-left hover:bg-inherit`}>
          <div className={`flex  ${Space.className} md:text-2xl text-[0.8rem] items-center`}>
            <Image
              src={imageClasses[props.color as keyof typeof imageClasses]}
              alt="bubbles"
              className="border-bottom rounded-xl scale-75 origin-bottom-left"
            />
            {props.question}
          </div>
        </AccordionTrigger>
        <AccordionContent className={`${colorClasses[props.color as keyof typeof colorClasses]} rounded-xl p-5`}>
          <p className={`${Space.className} pl-2 md:md:text-lg text-[0.8rem] text-black text-[0.8rem] text-black`}>
            {props.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));

  return (
    <>
      <div id="faqs" className="flex flex-col justify-center items-center bg-bg-black pb-20 pt-10">
        <div className="w-[90%] md:w-[80%] h-auto">
          <h1 className={`text-5xl ${Space.className} text-white text-center mb-14`}>FAQs</h1>
          <Accordion type="single" className="space-y-4">
            {items}
          </Accordion>
        </div>
        <div
          className={`flex flex-col gap-8 w-[90%] md:w-[80%] mt-12 pt-14 text-white ${Space.className}`}
          id="sponsor-us"
        >
          <div className="flex flex-row justify-center md:justify-start">
            <h1 className="text-5xl mb-4 w-auto">Let&apos;s Host Together</h1>
            <Image src={SponsorDecor} alt="Sponsor Heading Decoration" className="-translate-y-16 -translate-x-16 md:translate-x-0 md:-translate-y-7 " />
          </div>
          <div
            className={`flex flex-col xl:flex-row gap-12 items-center md:items-start justify-between w-full ${Space400.className}`}
          >
            <div className="pr-6 text-lg md:text-3xl">
              <p>Elevate your brand, be part of the tech revolution!</p>
              <p>
                Write to <b>collaborate</b> with us at: sponsorship@devshouse.tech
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYTeeWWnH_OV3X3vp__Sq6xLHw6eOpHPXQSj9aRhPrE4CH_g/viewform"
              target="_blank"
            >
              <Button size="xl" className="button-Sponsor">
                Sponsor Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
