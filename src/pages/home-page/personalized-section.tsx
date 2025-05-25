import { Button } from "antd";
import { Link } from "react-router-dom";

const PersonalizedSection = () => {
  return (
    <div className="bg-zinc-800 border-2 border-zinc-200 rounded text-center p-5 flex flex-col gap-3">
      <p>Sign in to see recommendations <span className="font-semibold">personalization</span></p>
      <div>
        <Button type="primary">Log in</Button>
      </div>
      <div>OR <Link to={`/sign-up`} className="underline text-orange-500 hover:text-orange-400 duration-300">Register</Link> and join IGZ for free</div>
    </div>
  );
};

export default PersonalizedSection;
