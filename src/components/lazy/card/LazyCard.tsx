import "../lazy.css";

const LazyCard = () => {
  return (
    <div className="w-full max-w-[187px] min-h-[273px] max-h-[273px] bg-[#242424] border-soft skeleton">
      <div className="border-soft" />
      <div className="font-bold my-1" />
      <div className="text-xs whitespace-normal" />
    </div>
  );
};

export default LazyCard;
