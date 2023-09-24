import Data from "../assets/data";
import filters from "../assets/filters";
import HeroCard from "./HeroCard";

function Filter(props) {
  return (
    <button className="border px-4 py-1 rounded-2xl w-fit whitespace-nowrap hover:bg-gray-100">
      {props.text}
    </button>
  );
}

export default function Hero() {
  let Events = Data.map((elt) => {
    return <HeroCard key={elt.id} image={elt.img} title={elt.title} />;
  });

  let filterss = filters.map((elt) => {
    return <Filter key={filters.indexOf(elt) + "one"} text={elt} />;
  });
  return (
    <article className="my-8">
      <div className="flex justify-between items-center px-[6%] mb-8">
        <p className="font-bold text-3xl">New This Week</p>
        <p className="font-serif text-xl">The Saint</p>
      </div>
      <section className="px-[6%] flex justify-between gap-6 scrollable-but-hidden">
        {Events}
      </section>
      <section className="ml-[6%] pr-[6%] mt-8 flex justify-between gap-4 scrollable-but-hidden">
        {filterss}
      </section>
    </article>
  );
}
