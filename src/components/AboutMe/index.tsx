import React from "react";

const AboutMe = React.forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref}>
      <h2 className="text-3xl text-gray-700 text-center font-semi-bold mb-4">
        {"<About Me />"}
      </h2>
    </div>
  );
});

export default AboutMe;
