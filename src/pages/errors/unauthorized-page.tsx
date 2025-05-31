import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">401</h1>
        <h2 className="text-2xl font-semibold mb-2">Unauthorized Access</h2>
        <p className="mb-6">You do not have permission to view this page.</p>
        <Button onClick={() => navigate(-1)} type="primary">Go Back</Button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
