
const lists = ["16 Nov 2007 Clinic Inuagrated.","First In Kolhapur Private Rehab Center.","Advanced Modalities","2007 Mentamove.","2009 Matrix Rhythm Therapy.","2016 Magnetodyn.","2019 Class Iv Laser."," 2024 Super Induction System."]

const ClinicHistory = () => {
  return (
    <div className="md:w-[50%] w-[100%] flex flex-col">
      <div className="md:text-lg-h2 text-customblue font-bold pb-4 text-lg-h3">
        Clinic History
      </div>
      <ol className="flex flex-col gap-3 w-[80%] md:text-lg-h3 ">
        {lists.map((el, i) => (
          <li className={i % 2 == 0 ? "bg-white" : null}>
            {i + 1 + ". " + el}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ClinicHistory;
