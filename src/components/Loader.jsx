import "../stylesheets/Loader.css";

export default function Loader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");
    loader.addEventListener("transitioned", () => {
      document.body.removeChild("loader");
    });
  });
  return (
    <>
      <div className="loader"></div>
    </>
  );
}
