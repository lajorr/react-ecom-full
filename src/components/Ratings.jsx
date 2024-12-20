import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Ratings = ({ rate, rateCount }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <StarRoundedIcon
          key={index}
          sx={{
            fontSize: "20px",
            color: `${index < Math.round(rate) ? "#FFAD33" : "black"}`,
            opacity: `${index >= Math.round(rate) && "25%"}`,
          }}
        />
      ))}
    </div>
  );
};

export default Ratings;
