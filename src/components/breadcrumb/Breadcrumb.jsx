import breadcrumbBG from "../../assets/images/breadcrumbBG.jpg";

function Breadcrumb() {
  return (
    <div className="relative w-full h-[150px] md:h-[250px] lg:h-[316px] font-poppins">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover opacity-50 blur-sm"
          style={{
            backgroundImage: `url(${breadcrumbBG})`,
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-3 px-4">
          <h2 className="text-3xl font-medium md:text-5xl">Shop</h2>
          <div className="flex items-center gap-1">
            <p className="font-medium">Home</p>
            <span className="material-symbols-outlined">chevron_right</span>
            <p className="font-light">Shop</p>
          </div>
        </div>
      </div>
  );
}

export default Breadcrumb;
