import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const ImageUpload = () => {
  return (
    <CldUploadWidget uploadPreset="bof0svvk">
      {({ open }) => {
        return (
          <Button onClick={() => open()} className="bg-grey-1 text-white">
            <Plus className="h-4 w-4 mr-2"/>
            Upload Image
          </Button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
