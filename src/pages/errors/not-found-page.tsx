import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import spaceBg from "@/assets/space_bg.jpg";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex-1 flex flex-col items-center h-full relative">
      <img
        src={spaceBg}
        alt=""
        className="object-cover h-48 w-full absolute top-0 rounded-b-lg"
      />
      <div className="text-center mt-36">
        <div className="text-8xl font-bold text-red-500 flex justify-center">
          <div className="rotate-6 z-10">4</div>
          <div className="text-white z-10">0</div>
          <div className="rotate-3 z-10">4</div>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-200">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button onClick={goBack} className="mt-6 inline-block">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
