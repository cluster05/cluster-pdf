import React, { useState, useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import { useHistory } from "react-router";

const ViewImages = () => {
  const history = useHistory();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imgs = JSON.parse(localStorage.getItem("images"));
    if (!imgs && !imgs.images) {
      history.push("/pdf-tools");
    }
    setImages(imgs.images);
    return () => {
      localStorage.removeItem("images");
    };
  }, [history]);

  const download = (image) => {
    var element = document.createElement("a");
    var file = new Blob([image.url], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = `pdf_page_${image.page}.jpg`;
    element.click();
  };

  return (
    <div className="p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {images.map((image) => (
          <div key={image.key} className="relative">
            <span
              onClick={() => download(image)}
              className="px-5 py-2 absolute -top-5 left-0 rounded border cursor-pointer text-white bg-gray-400 "
              href={image.url}
            >
              <BsDownload />
            </span>

            <img
              loading="lazy"
              src={image.url}
              className="border rounded shadow-md"
              alt={image.page}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewImages;
