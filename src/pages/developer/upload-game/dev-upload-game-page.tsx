import { Button, Form, message } from "antd";
import PaymentConfigWarning from "./payment-config-warning";
import UploadGuideLine from "./upload-guideline";
import GameInfoForm from "./game-info-form";
import StepLayout from "./step-layout";
import MediaAssetsForm from "./media-assets-form";
import GameFilesForm from "./game-files-form";
import useManageGameStore from "@/store/use-manage-game-store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GameFiles, GameInfo, GameMediaAssets } from "@/types/game";

const DevUploadGamePage = () => {
  const [infoForm] = Form.useForm<GameInfo>();
  const [mediaForm] = Form.useForm<GameMediaAssets>();
  const [fileForm] = Form.useForm<GameFiles>();
  const {
    setGameInfo,
    setGameFiles,
    setGameMediaAssets,
    gameInfo,
    gameMediaAssets,
    gameFiles,
    saveState,
    loadState,
    isLoaded,
  } = useManageGameStore();
  const navigate = useNavigate();

  const handleSaveDraft = () => {
    console.log(infoForm.getFieldsValue());
    console.log(mediaForm.getFieldsValue());
    console.log(fileForm.getFieldsValue());
  };
  const handleSubmit = async () => {
    try {
      const infoValues = await infoForm.validateFields();
      const mediaValues = await mediaForm.validateFields();
      const fileValues = await fileForm.validateFields();
      setGameInfo(infoValues);
      setGameMediaAssets(mediaValues);
      setGameFiles(fileValues);
      saveState();
      navigate("/dev/upload-game/preview");
    } catch (error) {
      message.error("Make sure all fields are filled correctly!");
    }
  };

  useEffect(() => {
    loadState();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      infoForm.setFieldValue("name", gameInfo.name);
      infoForm.setFieldValue("shortDescription", gameInfo.shortDescription);
      infoForm.setFieldValue("averageSession", gameInfo.averageSession);
      infoForm.setFieldValue("categoryId", gameInfo.categoryId);
      infoForm.setFieldValue("tagIds", gameInfo.tagIds);
      infoForm.setFieldValue("languageIds", gameInfo.languageIds);
      infoForm.setFieldValue("ageRestrictionId", gameInfo.ageRestrictionId);
      infoForm.setFieldValue("releaseStatus", gameInfo.releaseStatus);
      infoForm.setFieldValue("description", gameInfo.description);
      infoForm.setFieldValue("price", gameInfo.price);
      infoForm.setFieldValue("allowDonate", gameInfo.allowDonate);
      infoForm.setFieldValue("pricingOption", gameInfo.pricingOption);
      mediaForm.setFieldValue("videoLink", gameMediaAssets.videoLink);
      fileForm.setFieldValue(
        "installInstruction",
        gameFiles.installInstruction
      );
    }
  }, [isLoaded]);

  return (
    <div className="bg-zinc-900">
      <h1 className="font-bold text-2xl p-5">Upload a new game</h1>
      <PaymentConfigWarning />
      <div className="p-5">
        <UploadGuideLine />
        <StepLayout title="Game Information" current={0}>
          <GameInfoForm form={infoForm} />
        </StepLayout>
        <hr className="border-zinc-600 my-5" />
        <StepLayout title="Game Media Assets" current={1}>
          <MediaAssetsForm form={mediaForm} />
        </StepLayout>
        <hr className="border-zinc-600 my-5" />
        <StepLayout title="Game Files" current={2}>
          <GameFilesForm form={fileForm} />
        </StepLayout>
        <hr className="border-zinc-600 my-5" />
        <div className="flex justify-center gap-3">
          <Button onClick={handleSaveDraft}>Save as Draft</Button>
          <Button type="primary" onClick={handleSubmit}>
            Continue to Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DevUploadGamePage;
