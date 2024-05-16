import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";

const PreviewPage = () => {
  return (
    <main className="max-w-[1200px] mx-auto my-10 flex flex-col gap-4 text-primary-500 pb-20 px-8">
      <section className="grid grid-cols-2 gap-2">
        <div className="h-[400px] rounded-2xl overflow-hidden">
          <div className="w-full h-full overflow-hidden rounded-2xl relative">
            <img src="/house.jpg" className="w-full h-full object-cover" />
            <div className="absolute left-0 bottom-0 bg-black text-gray-200 px-8 text-[0.9rem] py-4">
              Shower
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2  overflow-hidden text-[0.9rem]">
          <div className="rounded-2xl w-full h-full overflow-hidden relative">
            <img src="/house.jpg" className="w-full h-full object-cover" />
            <div className="absolute left-0 bottom-0 bg-black text-gray-200 px-8  py-4">
              Shower
            </div>
          </div>
          <div className="rounded-2xl w-full h-full overflow-hidden relative">
            <img src="/house.jpg" className="w-full h-full object-cover" />
            <div className="absolute left-0 bottom-0 bg-black text-gray-200 px-8  py-4">
              Bathroom
            </div>
          </div>
          <div className="rounded-2xl w-full h-full overflow-hidden relative">
            <img src="/house.jpg" className="w-full h-full object-cover" />
            <div className="absolute left-0 bottom-0 bg-black text-gray-200 px-8  py-4">
              Shower
            </div>
          </div>
          <div className="rounded-2xl w-full h-full overflow-hidden relative">
            <img src="/house.jpg" className="w-full h-full object-cover" />
            <div className="absolute left-0 bottom-0 bg-black text-gray-200 px-8  py-4">
              Patio
            </div>
            <div className="absolute right-2 bottom-2 bg-black text-gray-200 px-3 py-1 rounded-lg border-2 border-secondary-500">
              see all 34 photos
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-[700] text-[1.8rem]">$399,990</h1>
          <p>5708 N 69th Ave, Glendale, AZ 85303</p>
        </div>
        <div className="flex gap-8">
          <div className="bg-gradient p-2">
            <div className=" text-secondary-500">
              Est: <span className="font-[600]">$2,340/mo</span>
            </div>
            <div>Get pre-qualified</div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-[700] text-[1.8rem]">4</span>
            <span>beds</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-[700] text-[1.8rem]">2</span>
            <span>baths</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-[700] text-[1.8rem]">1330</span>
            <span>sqrft</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src="/demo-img.jpg"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div className="px-3 flex items-center font-[600] gap-2 py-1 bg-gray-400 text-white rounded-xl">
            <HiOutlineChatBubbleOvalLeftEllipsis className="text-[1.2rem]" />
            <span>Chat</span>
          </div>
        </div>
      </section>
      <section className="grid my-8 grid-cols-3 items-center gap-x-6 gap-y-4">
        <div className="bg-gradient border-2 px-4 py-2 flex items-center gap-4">
          <IoDocumentTextOutline className="text-[1.2rem]" />
          <div>Single Family Residence</div>
        </div>
        <div className="bg-gradient border-2 px-4 py-2 flex items-center gap-4">
          <IoDocumentTextOutline className="text-[1.2rem]" />
          <div>Single Family Residence</div>
        </div>
        <div className="bg-gradient border-2 px-4 py-2 flex items-center gap-4">
          <IoDocumentTextOutline className="text-[1.2rem]" />
          <div>Single Family Residence</div>
        </div>
        <div className="bg-gradient border-2 px-4 py-2 flex items-center gap-4">
          <IoDocumentTextOutline className="text-[1.2rem]" />
          <div>Single Family Residence</div>
        </div>
        <div className="bg-gradient border-2 px-4 py-2 flex items-center gap-4">
          <IoDocumentTextOutline className="text-[1.2rem]" />
          <div>Single Family Residence</div>
        </div>
        <div className="bg-gradient border-2 px-4 py-2 flex items-center gap-4">
          <IoDocumentTextOutline className="text-[1.2rem]" />

          <div>Single Family Residence</div>
        </div>
      </section>
      <h1 className="font-[700] text-[1.7rem] mb-4">What's special</h1>
      <section className="grid grid-cols-2 gap-20">
        <p className=" text-justify leading-7">
          Beautiful home that shows pride of ownership from the exterior to all
          the recent upgrades inside. Roof was replaced in 2021, AC unit in
          2020, newer flooring, kitchen cabinets with granite counter-tops, new
          dual pane windows, fresh interior and exterior paint with newer
          stucco. Bathrooms were also remodeled and all light fixtures replaced
          throughout. Home has extended covered parking with large RV gate and a
          large cement.
        </p>
        <div className="p-5 bg-primary-500 rounded-3xl text-white">
          <h1 className="flex items-center gap-3 justify-center text-center font-[600] text-[1.7rem] mb-5">
            <MdOutlineHelp className="text-secondary-500" />
            <span>Got a Question?</span>
          </h1>
          <div className="flex flex-col gap-3 opacity-80">
            <input
              placeholder="Request anything..."
              className="py-3 text-[1.2rem] bg-gray-300 px-4 rounded-lg"
            />
            <button className="flex bg-secondary-500 items-center justify-center py-2 rounded-3xl">
              Start a Chat
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PreviewPage;
