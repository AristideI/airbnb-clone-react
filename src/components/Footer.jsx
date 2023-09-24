export default function Footer() {
  return (
    <div className="w-full bg-gray-100 px-[6%] py-8">
      <section className="flex justify-start gap-60 border-b-2 pb-8">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">Support</p>
          <a className="hover:underline" href="#">
            Help Center
          </a>
          <a className="hover:underline" href="#">
            AirCover
          </a>
          <a className="hover:underline" href="#">
            Anti-discrimination
          </a>
          <a className="hover:underline" href="#">
            Disability support
          </a>
          <a className="hover:underline" href="#">
            Cancellation options
          </a>
          <a className="hover:underline" href="#">
            Report neighborhood concern
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">Hosting</p>
          <a className="hover:underline" href="#">
            Airbnb your home
          </a>
          <a className="hover:underline" href="#">
            AirCover for Hosts
          </a>
          <a className="hover:underline" href="#">
            Hosting resources
          </a>
          <a className="hover:underline" href="#">
            Community forum
          </a>
          <a className="hover:underline" href="#">
            Hosting responsibly
          </a>
          <a className="hover:underline" href="#">
            Airbnb-friendly apartments
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">Airbnb</p>
          <a className="hover:underline" href="#">
            Newsroom
          </a>
          <a className="hover:underline" href="#">
            New features
          </a>
          <a className="hover:underline" href="#">
            Careers
          </a>
          <a className="hover:underline" href="#">
            Investors
          </a>
          <a className="hover:underline" href="#">
            Gift cards
          </a>
          <a className="hover:underline" href="#">
            Airbnb.org emergency stays
          </a>
        </div>
      </section>
      <section className="fontsemibold text-xl flex justify-between items-center">
        <p>Copyrigth @Aristide</p>
        <p>2023</p>
      </section>
    </div>
  );
}
