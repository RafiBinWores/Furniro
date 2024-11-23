import { Clock, Location, Phone } from "akar-icons";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

function ContactPage() {
  const pageName = "Contact";
  return (
    <div>
      <Breadcrumb page={pageName} />

      <div className="text-center font-poppins px-3 lg:px-0 w-full md:w-[550px] lg:w-[644px] mt-[100px] container mx-auto">
        <h2 className="pb-2 text-2xl font-semibold lg:text-4xl">Get In Touch With Us</h2>
        <p className="text-sm text-customGray-700">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="container w-full lg:w-[1058px] mb-10 mx-auto px-4 py-10 font-poppins">
        <div className="flex flex-col gap-10 mt-10 lg:flex-row">
          <div className="basis-2/5">
            <div className="px-10 space-y-8">
              <div className="flex gap-2">
                <Location />

                <div>
                  <p className="text-2xl font-medium">Address</p>
                  <p className="pt-2">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Phone />

                <div>
                  <p className="text-2xl font-medium">Address</p>
                  <p className="pt-2">
                    Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Clock />

                <div>
                  <p className="text-2xl font-medium">Address</p>
                  <p className="pt-2">
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/5">
            <form className="">
              <div className="w-full mb-6 space-y-[22px]">
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  className="block w-full p-4 text-sm text-gray-900 border rounded-md focus:outline-none focus:ring-golden focus:border-golden"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full mb-6 space-y-[22px]">
                <label className="font-medium">Email Address</label>
                <input
                  type="text"
                  className="block w-full p-4 text-sm text-gray-900 border rounded-md focus:outline-none focus:ring-golden focus:border-golden"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="w-full mb-6 space-y-[22px]">
                <label className="font-medium">Subject</label>
                <input
                  type="text"
                  className="block w-full p-4 text-sm text-gray-900 border rounded-md focus:outline-none focus:ring-golden focus:border-golden"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="w-full mb-6 space-y-[22px]">
                <label className="font-medium">Message</label>
                <textarea
                  className="block w-full h-32 p-4 mt-6 text-sm text-gray-900 border rounded-md focus:outline-none focus:ring-golden focus:border-golden"
                  name="desc"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <a
                href=""
                className="inline-flex items-center justify-center px-20 py-4 mt-6 text-white rounded-md bg-golden"
              >
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>


      <div className="container w-full px-3 mx-auto h-[500px] mb-20 lg:px-0">
      <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.444654965871!2d90.36162928053828!3d23.838339223459098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c16da106644d%3A0xf414c9bfac137ced!2sGoinnovior%20Limited-%20IT%20Service%20%7C%20IT%20Consulting%20Firm!5e0!3m2!1sen!2sbd!4v1732369494414!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
</div>

      <WhyChooseUs/>

    </div>
  );
}

export default ContactPage;
