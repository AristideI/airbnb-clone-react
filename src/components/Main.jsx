import Card from "./Cards";
import { experiences } from "../assets/data";
import Newer from "./Newer";

export default function Main() {
  return (
    <article className="px-[6%]">
      <p className="mb-8 mt-2 font-bold text-2xl">
        Plan a trip with help from local Hosts around the world
      </p>
      <section className="flex justify-between gap-6 mb-12">
        {experiences.slice(6, 12).map((exp) => {
          return (
            <Card
              key={exp.id}
              image={exp.img}
              rating={exp.rating}
              reviews={exp.reviews}
              location={exp.location}
              title={exp.title}
              price={exp.price}
            />
          );
        })}
      </section>
      <p className="mb-8 mt-2 font-bold text-2xl">Best Seller</p>
      <section className="flex justify-between gap-6 mb-12">
        {experiences.slice(12, 18).map((exp) => {
          return (
            <Card
              key={exp.id}
              image={exp.img}
              rating={exp.rating}
              reviews={exp.reviews}
              location={exp.location}
              title={exp.title}
              price={exp.price}
            />
          );
        })}
      </section>

      <section>
        <p className="mb-8 mt-2 font-bold text-2xl">
          Starting in the next 6 hours
        </p>
        <div>
          <Newer />
        </div>
      </section>
      <p className="mb-8 mt-2 font-bold text-2xl">Make plans this weekend</p>
      <section className="flex justify-between gap-6 mb-12">
        {experiences.slice(18, 24).map((exp) => {
          return (
            <Card
              key={exp.id}
              image={exp.img}
              rating={exp.rating}
              reviews={exp.reviews}
              location={exp.location}
              title={exp.title}
              price={exp.price}
            />
          );
        })}
      </section>
      <p className="mb-8 mt-2 font-bold text-2xl">Great for groups</p>
      <section className="flex justify-between gap-6 mb-12">
        {experiences.slice(0, 6).map((exp) => {
          return (
            <Card
              key={exp.id}
              image={exp.img}
              rating={exp.rating}
              reviews={exp.reviews}
              location={exp.location}
              title={exp.title}
              price={exp.price}
            />
          );
        })}
      </section>
      <div className="grid place-content-center mb-8">
        <button className="text-white font-semibold bg-black text-xl px-6 py-2 rounded-lg">
          Load More
        </button>
      </div>
    </article>
  );
}
