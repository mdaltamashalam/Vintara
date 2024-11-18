import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex flex-col md:flex-row items-center justify-center text-lightText duration-200 text-sm">
          <span className="flex items-center text-md mr-1">
            <AiOutlineCopyright />
          </span>
          <span>
            Copyright 2022 | Vintara Shopping | All Rights Reserved By Amir | Manya | Altamash | Shatakshi
          </span>
         
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
