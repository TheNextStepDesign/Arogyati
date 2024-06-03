const OpeningHoures = () => {
  return (
    <div className="flex flex-col gap-8 bg-white px-5 py-8 rounded-[23px]">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-customblue text-lg-h3 md:text-lg-h2">
          Opening Houres
        </h1>
      </div>
      <div className="md:h-[85px] flex md:justify-evenly  md:flex-row md:items-center flex-col gap-3 md:gap-0  md:text-lg-h3">
        <pre className="inline-block font-sora ">
          <b>Mon - Sat</b> : 10.00am - 02.00pm {"\n"}                         04.00pm - 07.00pm
        </pre>
        <div className="md:w-[1px] md:h-[60px] bg-black"></div>
        <div>
          <b>Sunday</b> : Closed
        </div>
      </div>
    </div>
  );
};

export default OpeningHoures;
