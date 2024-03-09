import { useEffect, useRef, useState } from "react";

export const useTitleRef = () => {
  const [titleLength, setTitleLength] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTitleLength(titleRef.current?.innerText.length!);
  }, []);

  return { titleLength, titleRef };
};
