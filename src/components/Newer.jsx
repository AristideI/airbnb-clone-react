export default function Newer() {
  return (
    <article className="flex justify-between items-center gap-10">
      <section className="w-1/3 h-48 mb-8 flex justify-start items-center px-2 rounded-xl border-2 gap-4">
        <img
          className="w-2/6 object-cover h-[90%] rounded-xl"
          src="./src/images/one.jpeg"
          alt="ones"
        />
        <section className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img className="w-5" src="./src/images/star.png" alt="Stars" />
            <p>4.5</p>
            <p>(3241)</p>
            <p className="font-semibold">Rwanda</p>
          </div>
          <p className="">
            Golden Milk/ Turmeric Latte Master Class - Vegan Friendly
          </p>
          <p>From 12$ / person</p>
          <div className="flex gap-4">
            <p className="px-2 py-1 border rounded-xl w-fit border-black font-semibold">
              6:00 PM
            </p>
            <p className="px-2 py-1 border rounded-xl w-fit border-black font-semibold">
              9:00 PM
            </p>
          </div>
        </section>
      </section>
      <section className="w-1/3 h-48 mb-8 flex justify-start items-center px-2 rounded-xl border-2 gap-4">
        <img
          className="w-2/6 object-cover h-[90%] rounded-xl"
          src="./src/images/15.jpeg"
          alt="ones"
        />
        <section className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img className="w-5" src="./src/images/star.png" alt="Stars" />
            <p>4.9</p>
            <p>(1831)</p>
            <p className="font-semibold">Canada</p>
          </div>
          <p className="">
            Discover Terracotta Warriors With a Professional Guide
          </p>
          <p>From 42$ / person</p>
          <div className="flex gap-4">
            <p className="px-2 py-1 border rounded-xl w-fit border-black font-semibold">
              10:00 AM
            </p>
            <p className="px-2 py-1 border rounded-xl w-fit border-black font-semibold">
              12:00 PM
            </p>
          </div>
        </section>
      </section>
      <section className="w-1/3 h-48 mb-8 flex justify-start items-center px-2 rounded-xl border-2 gap-4">
        <img
          className="w-2/6 object-cover h-[90%] rounded-xl"
          src="./src/images/19.jpeg"
          alt="ones"
        />
        <section className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img className="w-5" src="./src/images/star.png" alt="Stars" />
            <p>5.0</p>
            <p>(1641)</p>
            <p className="font-semibold">Thailand</p>
          </div>
          <p className="">How To Caricature </p>
          <p>From 24$ / person</p>
          <div className="flex gap-4">
            <p className="px-2 py-1 border rounded-xl w-fit border-black font-semibold">
              4:00 PM
            </p>
            <p className="px-2 py-1 border rounded-xl w-fit border-black font-semibold">
              7:00 PM
            </p>
          </div>
        </section>
      </section>
    </article>
  );
}
