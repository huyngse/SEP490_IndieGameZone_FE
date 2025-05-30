import { Spin } from "antd";

const Loader = ({ theme = "dark" }: { theme?: "dark" | "light" }) => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <Spin tip="Loading" size="large">
        {theme == "dark" && (
          <div className="p-16 rounded bg-zinc-800 border-orange-500 border-2"></div>
        )}
        {theme == "light" && (
          <div className="p-16 rounded bg-zinc-200 border-orange-600 border-2"></div>
        )}
      </Spin>
    </div>
  );
};

export default Loader;
