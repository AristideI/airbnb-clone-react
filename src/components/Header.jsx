export default function Header() {
  return (
    <header className="flex justify-between items-center px-[6%] py-6 border-b">
      <section className="flex items-center gap-3">
        <img
          className="w-8 object-contain"
          src="./src/images/logo.png"
          alt="Mainlogo"
        />
        <p className="text-red-500 text-[23px] font-bold">airbnb</p>
      </section>

      <section className="flex items-center gap-0">
        <p className="font-semibold text-[15px] px-4 py-2 rounded-2xl hover:bg-gray-100 transition-all duration-300">
          Airbnb your home
        </p>
        <div className="px-4 py-2 rounded-2xl hover:bg-gray-100">
          <img className="w-5" src="./src/images/globe.png" alt="web image" />
        </div>
        <div className="flex items-center gap-2 border-2 rounded-3xl px-2 py-2 hover:shadow-lg transition-shadow duration-300">
          <img className="w-6" src="./src/images/menu.png" alt="Menu" />
          <img className="w-6" src="./src/images/user.png" alt="user" />
        </div>
      </section>
    </header>
  );
}
