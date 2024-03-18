import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About"} />
        <div className="max-w-md text-gray-500 mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to NARDT Pizzeria, where we code up delicious slices! Our
            journey started with a simple algorithm: blend coding and cooking.
            In our digital kitchen, lines of code meet dashes of sauce, and
            functions mix with toppings.
          </p>
          <p>
            At NARDT, we believe in coding adventures. Our "Build Your Own
            Pizza" feature lets you choose crust (HTML, CSS, or JavaScript) and
            toppings (variables, arrays, objects) for a taste of customization
            in every byte.
          </p>
          <p>
            But we're not just coding pizzas; we're coding a tastier future. Our
            team optimizes delivery routes with algorithms, ensuring your
            NARDT experience is fast and efficient, one slice at a time.
          </p>
        </div>
      </section>
    </>
  );
}
