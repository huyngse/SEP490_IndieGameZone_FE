import { Avatar, Button } from "antd";
// import { useDropzone } from "react-dropzone";
// import toast from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { FaUpload } from "react-icons/fa";

// const MAX_FILE_SIZE = 5000000;
// function checkFileType(file: File) {
//   if (file == null) return true;
//   if (file?.name) {
//     const fileType = file.name.split(".").pop();
//     if (fileType === "png" || fileType === "jpeg" || fileType === "jpg")
//       return true;
//   }
//   return false;
// }

// const acceptedFileTypes = {
//   "image/jpeg": [],
//   "image/png": [],
// };

const UploadAvatar = () => {
//   const onDrop = async (acceptedFiles: File[]) => {
//     toast("Update avatar successfully", {
//       icon: "✅",
//       style: {
//         borderRadius: "10px",
//         background: "#333",
//         color: "#fff",
//       },
//     });
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: acceptedFileTypes,
//   });

  return (
    <div>
      <div className="flex gap-3">
        <Avatar size={100} icon={<CiUser />} />
        <button className="size-[100px] flex justify-center items-center border border-zinc-500 hover:border-orange-500 cursor-pointer rounded-full duration-300 hover:text-orange-500">
          <FaUpload className="size-8" />
        </button>
      </div>
      <Button className="mt-3">Upload Image</Button>
    </div>
  );
};

export default UploadAvatar;
