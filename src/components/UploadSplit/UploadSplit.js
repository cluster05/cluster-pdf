import React, { useState } from "react";
import SelectFileUI from "../SelectFileUI";
import UploadLoading from "../UploadLoading";
import ViewSplitView from "../../pages/ViewPdf/ViewSplitView";
import { documentInstance } from "../../instance";

const UploadSplit = () => {
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [documentId, setDocumentId] = useState("");

  const componentMetadata = {
    title: "Split PDF",
    subtitle: "Extract selected page from pdf and save them.",
    fileType: ".pdf",
    color: "red",
  };
  const { title, subtitle, fileType, color } = componentMetadata;

  const fileChangeHandler = async (event) => {
    const file = await event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const response = await documentInstance.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);
      setFileUrl(response.data.url);
      setDocumentId(response.data.mongoId);
      setShowPreview(true);
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error?.response?.data?.message ||
        "error occured while processing given opration.";
      alert(errorMessage);
    }
  };

  const classes = `min-w-max max-w-5xl w-full rounded border-${color}-400 bg-${color}-500`;

  return (
    <div>
      <div className="my-10 flex items-center flex-col">
        <h1 className="text-4xl tracking-wide">{title}</h1>
        <p className="max-w-3xl  text-2xl my-4 tracking-wide font-light text-center">
          {subtitle}
        </p>
      </div>
      {showPreview ? (
        <ViewSplitView downloadUrl={fileUrl} documentId={documentId} />
      ) : (
        <div className="mt-28 px-2  flex items-center justify-center">
          <div className={classes} style={{ borderWidth: "16px" }}>
            <div className="flex items-center py-16 flex-col border-4 border-gray-600 rounded-md border-dashed">
              {loading ? (
                <UploadLoading />
              ) : (
                <SelectFileUI
                  fileChangeHandler={fileChangeHandler}
                  fileType={fileType}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSplit;
