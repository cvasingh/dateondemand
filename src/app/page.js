import moment from "moment";

export default function Home() {
  return (
    <section className="py-24 relative font-Inter">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-black">
        <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10  bg-gradient-to-r to-primary from-primary/60 rounded-2xl flex-col justify-end items-center inline-flex shadow border">
          <div className="flex-col justify-end items-center lg:gap-8 gap-4 flex">
            <h2 className="text-center md:text-6xl text-5xl font-bold font-manrope leading-normal">Coming Soon</h2>
            <p className="text-center text-base font-normal leading-relaxed">
              Just {moment("2024-12-25", "YYYY-MM-DD").fromNow()} remaining until the big reveal of our product!
            </p>
          </div>
          {/* <p className="text-center text-sm font-normal leading-snug my-4">
            Get in touch with us:{" "}
            <a href="mailto:support@nevaani.com" className="text-black text-sm">
              support@nevaani.com
            </a>
          </p> */}
          <h6 className="text-center text-base font-semibold leading-relaxed">Launched Date: December 25, 2024</h6>
        </div>
      </div>
    </section>
  );
}
