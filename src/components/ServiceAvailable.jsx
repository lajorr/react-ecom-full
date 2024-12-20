const ServiceAvailable = ({ title, description, icon }) => {
  return (
    <div className="flex gap-4 px-4 items-center ">
      <img src={icon} alt="free delivery" />
      <div>
        <h2 className="font-[500] text-[16px]">{title}</h2>
        <p className="font-[500] text-[12px]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceAvailable;
