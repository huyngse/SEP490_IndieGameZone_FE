import { Button } from "antd";
import { Link } from "react-router-dom";

const PersonalizedSection = () => {
  return (
    <div className="bg-zinc-800 border-2 border-zinc-200 rounded text-center p-5 flex flex-col gap-3">
      <p>Đăng nhập để xem các đề xuất được <span className="font-semibold">cá nhân hóa</span></p>
      <div>
        <Button type="primary">Đăng Nhập</Button>
      </div>
      <div>Hoặc <Link to={`/sign-up`} className="underline text-orange-500 hover:text-orange-400 duration-300">đăng ký</Link> và tham gia IGZ miễn phí</div>
    </div>
  );
};

export default PersonalizedSection;
