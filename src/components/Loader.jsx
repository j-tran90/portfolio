import { useEffect, useState } from "react";
import "../stylesheets/Loader.css";

export default function Loader() {
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setIsLoading(
      window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitioned", () => {
          document.body.removeChild("loader");
        });
      })
    );
  }, []);
  return (
    <>
      <div className="loader"></div>
    </>
  );
}
