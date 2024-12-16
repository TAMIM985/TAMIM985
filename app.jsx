import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
const App = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="parent-div ">
      <div className="pos-abs frame-3-119" id="id-119">
        <div className="pos-abs rectangle-3-120" id="id-120"></div>
        <div className="pos-abs ellipse-2-121" id="id-121">
          <div
            className="nodeBg-121 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "
            id="id-bg-121"
          ></div>
        </div>
        <div className="pos-abs cloudicon17-1-149" id="id-149">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-149 "
            id="id-bg-149"
            alt="cloud-icon-17 11 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs sunicon1024x102-146" id="id-146">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-146 "
            id="id-bg-146"
            alt="sun-icon-1024x1024-ngpf4u12 21 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs sunicon1024x102-147" id="id-147">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-147 "
            id="id-bg-147"
            alt="sun-icon-1024x1024-ngpf4u12 31 Image"
          >
            {" "}
          </div>
        </div>
        <div className="pos-abs sunicon1024x102-142" id="id-142">
          <div
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-142 "
            id="id-bg-142"
            alt="sun-icon-1024x1024-ngpf4u12 11 Image"
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
