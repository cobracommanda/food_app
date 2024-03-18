import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start ">
        <div className="h-48 w-48 absolute -top-[70px] left-0 text-left -z-10">
          <Image src={"/salad1.png"} width={109} height={189} alt={""} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/salad2.png"} alt={""} width={107} height={195} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={"check out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
