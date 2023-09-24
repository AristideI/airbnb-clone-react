export default function HeroCard(props) {
  return (
    <section className="min-w-[40%] h-80 rounded-2xl overflow-hidden relative">
      <img className="w-full h-full object-cover" src={props.image} alt="" />
      <div className="absolute top-4 left-4 text-white w-[50%]">
        <p>Collection</p>
        <p className="font-bold text-3xl">{props.title}</p>
      </div>

      <button className="absolute bottom-4 left-4 bg-white hover:bg-gray-100 transition-all duration-300 px-5 py-2 rounded-lg">
        Show All
      </button>
    </section>
  );
}
