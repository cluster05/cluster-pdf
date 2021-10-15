import React, { useEffect } from "react";
import { getDirection } from "../../tools/ConvertDirection";
import UploadConvert from "../../components/UploadConvert/UploadConvert";
import { useHistory } from "react-router";

const Convert = () => {
  const history = useHistory();
  let routename = history.location.pathname;

  routename = routename.substr(1, routename.length);

  const opration = routename.split("-").join("");

  const metadata = getDirection[opration];

  useEffect(() => {
    if (
      metadata.apiMetaData.APIRequestBody.from == "pdf" ||
      metadata.apiMetaData.APIRequestBody.to == "office"
    ) {
      history.push("/under-process");
      return;
    }
  }, []);

  return (
    <div>
      <UploadConvert
        apiMetadeta={metadata.apiMetaData}
        componentMetadata={metadata.componentMetadata}
      />
    </div>
  );
};

export default Convert;
