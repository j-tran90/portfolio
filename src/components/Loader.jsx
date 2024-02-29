import { useEffect, useState } from "react";
import "../stylesheets/Loader.css";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  // window.addEventListener("load", () => {
  //   const loader = document.querySelector(".loader");
  //   loader.classList.add("loader-hidden");
  //   loader.addEventListener("transitioned", () => {
  //     document.body.removeChild("loader");
  //   });
  // })

  useEffect(() => {
    setIsLoading(true);
    document.querySelector(".loader");
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <div className="loader"></div>
        </>
      ) : (
        <div className="loader-hidden"></div>
      )}
    </>
  );
}
