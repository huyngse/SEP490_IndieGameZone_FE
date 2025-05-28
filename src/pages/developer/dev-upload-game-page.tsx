import { Link } from "react-router-dom";

const DevUploadGamePage = () => {
  return (
    <div className="bg-zinc-900">
      <h1 className="font-bold text-2xl p-5">Upload a new game</h1>
      <div className="bg-red-500/20 px-5 py-3">
        You don't have payment configured. If you set a minimum price above 0 no
        one will be able to download your project. {" "}
        <Link to={"/dev/earnings"} className="text-orange-500 underline">Edit account</Link>
      </div>
    </div>
  );
};

export default DevUploadGamePage;
