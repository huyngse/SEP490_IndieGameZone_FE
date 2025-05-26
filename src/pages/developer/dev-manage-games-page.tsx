import { Button } from "antd";
import { FaUpload } from "react-icons/fa";

const DevManageGamesPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center">
      <p className="text-4xl font-semibold">Are you a developer?</p>
      <p className="text-xl"> Upload your first game</p>
      <Button icon={<FaUpload />} type="primary" className="mt-5">
        Upload a new game
      </Button>
    </div>
  );
};

export default DevManageGamesPage;
