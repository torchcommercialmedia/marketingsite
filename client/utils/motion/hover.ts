import React, { useState } from "react";
export const hover3d = (_ref: any, { x = 0, y = 0, z = 0 }: any) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: { clientX: any; clientY: any }) => {
    const { offsetWidth: width, offsetHeight: height } = _ref.current;
    const { clientX, clientY } = e;

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;

    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    const { current } = _ref;
    if (!current) return;
    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      current.removeEventListener("mousemove", handleMouseMove);
      current.removeEventListener("mouseenter", handleMouseEnter);
      current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [_ref]);

  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "none" : "all 0.5s ease";

  return { transform, transition };
};
