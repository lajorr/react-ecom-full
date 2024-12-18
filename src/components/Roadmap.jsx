import { useNavigate } from "react-router-dom";
const Roadmap = ({ path }) => {
  const navigate = useNavigate();
  return (
    <div className="text-black/50 text-[14px] my-[80px] flex gap-3 mx-[135px]">
      <span
        className="hover:underline underline-offset-4 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </span>
      <span>/</span>
      <span className="text-black">{path}</span>
    </div>
  );
};

export default Roadmap;
