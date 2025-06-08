import useManageGameStore from "@/store/use-manage-game-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GamePreviewUploadPage = () => {
  const { isSaved, gameMediaAssets } = useManageGameStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSaved) {
      navigate("/dev/upload-game");
    } else {
      console.log(gameMediaAssets);
    }
  }, [isSaved]);
  if (!isSaved) return;
  return <div>Preview page</div>;
};
