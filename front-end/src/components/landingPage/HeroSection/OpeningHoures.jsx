const OpeningHoures = () => {
  return (
    <div className="flex flex-col gap-8 bg-white px-1 py-8 rounded-[23px]">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-customblue text-lg-h3 md:text-lg-h2">
          Opening Houres
        </h1>
      </div>
      <div className="md:h-[85px] w-[90%] md:w-[100%] flex md:justify-evenly md:flex-row md:items-center flex-col justify-center m-auto gap-3 lg:gap-0  lg:text-lg-h3 ">
        <div>
          <div className="flex gap-1">
            <b>Mon - Sat :</b> <p>10.00 - 02.00pm</p>
          </div>

          <div className="flex gap-1">
            <div className="p-0 opacity-0 block">Mon - Sat:</div>{" "}
            <p>04.00pm - 07.00pm</p>
          </div>
        </div>

        <div className="md:w-[1px] md:h-[60px] bg-black"></div>
        <div>
          <b>Sunday</b> : Closed
        </div>
      </div>
    </div>
  );
};

export default OpeningHoures;
