const Loader = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-20 h-12">
        <span className="absolute top-0 text-[0.8rem] text-black/70 animate-text">
          loading
        </span>
        <span className="absolute bottom-0 bg-[black] rounded-full h-4 w-4 translate-x-[64px] animate-load before:animate-load2" />
      </div>
    </div>
  );
};

export default Loader;
