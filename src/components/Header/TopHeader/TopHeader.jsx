import React from "react";

const content = {
  heading: 'Limited-time offer: “Hurry! 25% off all products ends in 3 days!',
};

const TopHeader = () => {
  return (
    <div className="bg-[#4a00e0] w-full hidden md:block">
      <div className="container mx-auto px-4 py-1">
        {content.heading && (
          <p className="text-center text-white font-medium text-[15px]">
            {content.heading}
          </p>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
