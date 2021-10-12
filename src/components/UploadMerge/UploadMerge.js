import React, { useState } from "react";
import SelectFileUI from "../SelectFileUI";
import UploadLoading from "../UploadLoading";
import { useHistory } from "react-router";
import { BiMerge } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
import { documentInstance } from "../../instance";

const UploadMerge = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [uplaodigStage, setUplaodigStage] = useState("uploading");
  const [urls, setUrls] = useState([]);
  const [mongoIds, setMongoIds] = useState([]);
  const [keys, setKeys] = useState([]);

  const componentMetadata = {
    title: "Merge PDF",
    subtitle: "Uplaod two to five PDF files and merge them easily",
    fileType: ".pdf",
    color: "red",
  };
  const { title, subtitle, fileType, color } = componentMetadata;

  const fileChangeHandler = async (event) => {
    if (urls.length > 4) {
      alert("You exced limit to merge");
      return;
    }

    const file = await event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setUplaodigStage("uploading");

    try {
      const response = await documentInstance.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      let { url, mongoId, key } = response.data;

      setUrls([...urls, url]);
      setMongoIds([...mongoIds, mongoId]);
      setKeys([...keys, key]);

      setLoading(false);
      setUplaodigStage("uploading");
    } catch (error) {
      setLoading(false);
      setUplaodigStage("uploading");
      const errorMessage =
        error?.response?.data?.message ||
        "error occured while processing given opration.";
      alert(errorMessage);
    }
  };

  const mergeHandler = async () => {
    if (uplaodigStage === "processing") {
      return;
    }
    try {
      setUplaodigStage("processing");
      setLoading(true);

      const response = await documentInstance.post("/merge", {
        urls,
        keys,
        mongoId: mongoIds[0],
      });

      setUplaodigStage("uploading");
      setLoading(false);

      history.push(`/view-pdf?filename=${response.data.key}`);
    } catch (error) {
      setLoading(false);
      setUplaodigStage("uploading");
      const errorMessage =
        error?.response?.data?.message ||
        "error occured while processing given opration.";
      alert(errorMessage);
    }
  };

  const classes = `min-w-max max-w-5xl w-full rounded border-${color}-400 bg-${color}-500 relative`;

  return (
    <div>
      <div className="my-10 flex items-center flex-col">
        <h1 className="text-4xl tracking-wide">{title}</h1>
        <p className="max-w-3xl  text-2xl my-4 tracking-wide font-light text-center">
          {subtitle}
        </p>
      </div>
      <div className="mt-28 px-2  flex items-center justify-center">
        <div className={classes} style={{ borderWidth: "16px" }}>
          <div className="flex items-center py-16 flex-col border-4 border-gray-600 rounded-md border-dashed">
            {loading ? (
              <UploadLoading stage={uplaodigStage} />
            ) : (
              <SelectFileUI
                fileChangeHandler={fileChangeHandler}
                fileType={fileType}
              />
            )}
            {urls.length > 0 ? (
              <span className="mt-2 px-5 py-2 rounded shadow font-bold text-white bg-red-400">
                {" "}
                {urls.length} files uplaoded sucessfully.
              </span>
            ) : null}
          </div>

          <div className="absolute bottom-5 right-5">
            {urls.length > 1 ? (
              <button
                onClick={mergeHandler}
                className="px-5 py-2 rounded shadow font-semibold text-white bg-red-400 hover:bg-red-300 flex items-center"
              >
                {uplaodigStage === "processing" ? (
                  <VscLoading className="text-3xl animate-spin" />
                ) : (
                  <div className="flex items-center">
                    <BiMerge className="mr-2 text-xl" />
                    <span> Merge PDF </span>
                  </div>
                )}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMerge;
