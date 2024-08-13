import Image from "next/image";
type MainPrizeProp = {
  src: string; // image src link
  width: number;
  height: number;
  price: string; // Ex: 30,000
  alt: string; //1st, 2nd or 3rd
};

export default function MainPrizeCard({ src, width, height, price, alt }: MainPrizeProp) {
  return (
    <div className="flex flex-col justify-end">
      <Image src={src} alt={`${alt} place`} width={width} height={height} className="shadow" />
      <div className="text-center text-white text-xs font-bold font-['Space Grotesk'] md:text-[24px]  whitespace-nowrap">
        {/* <h1 >INR {price}</h1> */}
        <h1 className="bold text-xl md:text-5xl">{price}</h1>
      </div>
    </div>
  );
}
