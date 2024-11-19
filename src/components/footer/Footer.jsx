function Footer() {
  return (
    <footer>
      <div className="container px-3 pb-20 mx-auto lg:px-0 font-poppins lg:mb-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Funiro.</h3>
            <div className="text-customGray-100 mt-8 lg:mt-[50px]">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-medium text-customGray-100">Links</p>
              <div className="flex flex-col gap-8 lg:gap-11 mt-8 lg:mt-[50px] font-medium">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div>
              <p className="font-medium text-customGray-100">Help</p>
              <div className="flex flex-col gap-8 lg:gap-11 mt-8 lg:mt-[50px] font-medium">
                <a href="">Payments options</a>
                <a href="">Returns</a>
                <a href="">Privacy policy</a>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium text-customGray-100">Newsletter</p>
            <div className="mt-8 lg:mt-[50px] flex items-center gap-4">
              <input
                className="border-b-[1px] border-black w-[200px] placeholder:text-sm"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <p className="text-sm font-medium underline uppercase underline-offset-[6px]">Subscribe</p>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-customGray-200" />
        <p className="mt-6 lg:mt-[35px]">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}

export default Footer;
