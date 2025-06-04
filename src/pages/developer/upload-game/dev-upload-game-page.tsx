import { Form } from "antd";
import PaymentConfigWarning from "./payment-config-warning";
import UploadGuideLine from "./upload-guideline";
import GameInfoForm from "./game-info-form";
import StepLayout from "./step-layout";
import MediaAssetsForm from "./media-assets-form";

const DevUploadGamePage = () => {
  const [infoForm] = Form.useForm();

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
          <MediaAssetsForm />
        </StepLayout>
      </div>
    </div>
  );
};

export default DevUploadGamePage;
