import qualityIcon from "../../assets/images/quality.png";
import protectionIcon from "../../assets/images/protection.png";
import shippingIcon from "../../assets/images/shipping.png";
import supportIcon from "../../assets/images/support.png";


function WhyChooseUs() {
  return (
    <div className="bg-peach py-[100px] font-poppins">
        <div className="container px-3 mx-auto lg:px-0">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3">
                    <img src={qualityIcon} alt="High Quality icon" />
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[25px] text-customGray-900">High Quality</p>
                        <p className="text-xl font-medium text-customGray-700">crafted from top materials</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={protectionIcon} alt="High Quality icon" />
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[25px] text-customGray-900">Warranty Protection</p>
                        <p className="text-xl font-medium text-customGray-700">Over 2 years</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={shippingIcon} alt="High Quality icon" />
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[25px] text-customGray-900">Free Shipping</p>
                        <p className="text-xl font-medium text-customGray-700">Order above 150 $</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img src={supportIcon} alt="High Quality icon" />
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[25px] text-customGray-900">24 / 7 Support</p>
                        <p className="text-xl font-medium text-customGray-700">Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs