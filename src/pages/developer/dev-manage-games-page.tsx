import { Button } from "antd";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DevManageGamesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center">
      <p className="text-4xl font-semibold">Are you a developer?</p>
      <p className="text-xl"> Upload your first game</p>
      <Button icon={<FaUpload />} type="primary" className="mt-5" onClick={() => navigate("/dev/upload-game")}>
        Upload a new game
      </Button>
    </div>
  );
};

export default DevManageGamesPage;
