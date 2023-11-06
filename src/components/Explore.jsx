/** @format */
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";

const Explore = () => {
  return (
    <div className="w-11/12 m-auto grid grid-cols-1 gap-5 my-10 md:grid-cols-4 md:w-10/12">
      <div>
        <h1 className="text-3xl py-4 dark:text-white">
          Explore the World with us
        </h1>
        <p className="dark:text-white">
          We believe that travel is about creating memories that last a
          lifetime. Our trips are designed to leave a lasting impression.
        </p>
      </div>
      <div className="relative h-[430px]">
        <img src={a3} alt="photo 1" className="w-full h-full object-cover" />
        <p className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white border-b border-white">
          Road Trips
        </p>
      </div>
      <div className="relative h-[430px]">
        <img src={a2} alt="photo 2" className="w-full h-full object-cover" />
        <p className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white border-b border-white">
          Skiing
        </p>
      </div>
      <div className="relative h-[430px]">
        <img src={a1} alt="photo 3" className="w-full h-full object-cover" />
        <p className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white border-b border-white">
          Tropical Gateways
        </p>
      </div>
    </div>
  );
};

export default Explore;
