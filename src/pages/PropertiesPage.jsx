import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import { BsListUl } from "react-icons/bs";

import { RxBookmark } from "react-icons/rx";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { RiEdit2Fill } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";

import ModalSlider from "../Components/ModalSlider";
import { HiX } from "react-icons/hi";

const PropertiesPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="w-full h-full">
        <aside className="text-white fixed overflow-y-auto top-0 left-0 w-[300px] bg-primary-500/90 h-[100dvh]">
          <div className="px-4 py-10">
            <div className="flex items-center gap-3 mt-10 pb-5 border-b border-secondary-500/20">
              <img
                className="w-[50px] h-[50px] rounded-full object-cover"
                src="/demo-img.jpg"
              />
              <div>
                <div className="text-primary-100/50 tracking-wider uppercase text-[0.8rem]">
                  name
                </div>
                <div>Edit Profile</div>
              </div>
            </div>
            <nav className="py-10">
              <ul className="flex flex-col">
                <li className="flex hover:bg-gray-50/10 px-5 rounded-xl py-4 opacity-80 hover:opacity-100 cursor-pointer items-center gap-5">
                  <BsListUl className="text-[1.4rem]" />
                  Listed Properties
                </li>
                <li className="flex hover:bg-gray-50/10 px-5 rounded-xl py-4 opacity-80 hover:opacity-100 cursor-pointer items-center gap-5">
                  <RxBookmark className="text-[1.4rem]" />
                  My Properties
                </li>
                <li className="flex hover:bg-gray-50/10 px-5 rounded-xl py-4 opacity-80 hover:opacity-100 cursor-pointer items-center gap-5">
                  <HiOutlineChatBubbleOvalLeftEllipsis className="text-[1.4rem]" />{" "}
                  Chat
                </li>
                <li className="flex hover:bg-gray-50/10 px-5 rounded-xl py-4 opacity-80 hover:opacity-100 cursor-pointer items-center gap-5">
                  <RxDashboard className="text-[1.4rem]" /> Templates
                </li>
                <li className="flex hover:bg-gray-50/10 px-5 rounded-xl py-4 opacity-80 hover:opacity-100 cursor-pointer items-center gap-5">
                  <IoDocumentTextOutline className="text-[1.4rem]" />
                  User Documents
                </li>
              </ul>
            </nav>
            <div className="border-[1px] rounded-3xl bg-primary-500/50 border-secondary-500/30 px-4 text-center py-4 mx-5 flex flex-col gap-2">
              <h2 className="font-[500]">Ready To Sell?</h2>
              <p className="text-gray-500 text-[0.9rem] ">
                Use our advance AI to sell your home fast, no commissions!
              </p>
              <button className="bg-secondary-500 text-white flex justify-center py-2 mt-2 rounded-xl gap-4">
                <AiOutlinePlus className="text-[1.2rem]" />
                <span>List Now</span>
              </button>
            </div>
          </div>
        </aside>
        <main className="px-20 pl-[350px] mt-10 grid grid-cols-2 gap-x-5 gap-y-8 pb-20 max-w-[1500px] mx-auto">
          {Array.from({ length: 6 }).map((itm, i) => (
            <div
              key={i}
              className=" bg-secondary-500/90 grid grid-cols-2 text-white rounded-3xl overflow-hidden text-[0.9rem]"
            >
              <div className="pl-5 py-4 flex flex-col gap-1">
                <div>
                  <span>Status:</span>
                  <span>Unknown</span>
                </div>
                <address>
                  <div></div>
                  <div>3001 Hennepin Ave, Minneapolis MN 55408, USA</div>
                </address>
                <h3 className="text-[1rem] font-[500]">Name Lorem</h3>
                <p>
                  Lorem description <br /> Lorem description
                  <br />
                  Lorem description
                  <br />
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    className="bg-primary-500 text-white font-[500] px-3 py-[0.2rem] rounded-xl border-primary-200 border-2 flex items-center gap-2"
                    onClick={() => setShowModal(true)}
                  >
                    <RiEdit2Fill className="text-[1.2rem]" />
                    <span>Edit</span>
                  </button>
                  <Link
                    to="/preview"
                    className="bg-primary-500 text-white font-[500] px-3 py-[0.2rem] rounded-xl border-primary-200 border-2 flex items-center gap-2"
                  >
                    <MdRemoveRedEye className="text-[1.2rem]" />
                    <span>Preview</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl relative overflow-hidden">
                <Slider />
              </div>
            </div>
          ))}
        </main>
      </div>
      {showModal && (
        <>
          {" "}
          <div className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm"></div>
          <div className="fixed max-h-[90dvh]  inset-0 z-50  overflow-hidden text-primary-500 pb-10">
            <div className="bg-red-50 h-full overflow-y-auto w-[1200px] mx-auto mt-10 p-10">
              <button
                onClick={() => setShowModal(false)}
                className="flex items-center gap-1 mb-4 text-gray-500"
              >
                <MdArrowBackIos />
                <span>Back to list</span>
              </button>
              {/* Slider */}
              <ModalSlider />
              <section>
                <div className="w-full py-5 border-[3px] border-primary-500/50 rounded-3xl border-dashed text-[1.3rem] flex flex-col gap-2 items-center text-primary-500/50">
                  <LuImagePlus className="text-[1.7rem]" />
                  <div>Upload Image</div>
                </div>
              </section>
              <section className="mt-3 flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="font-[700] text-[1.8rem] flex items-center">
                    <span>$399,990</span>
                    <RiEdit2Fill className="text-[1.2rem] text-secondary-500" />
                  </h1>
                  <p className="flex">
                    5708 N 69th Ave, Glendale, AZ 85303
                    <RiEdit2Fill className="text-[1.2rem] text-secondary-500" />
                  </p>
                </div>
                <div className="flex gap-8">
                  <div className="bg-gradient p-2 flex items-center">
                    <div className=" text-secondary-500 ">
                      Est: <span className="font-[600]">$2,340/mo</span>
                    </div>
                    <RiEdit2Fill className="text-[1.2rem] text-secondary-500" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="font-[700] text-[1.8rem] flex items-center">
                      4
                      <RiEdit2Fill className="text-[1.2rem] text-secondary-500" />
                    </span>
                    <span>beds</span>
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="font-[700] text-[1.8rem] flex items-center">
                      2
                      <RiEdit2Fill className="text-[1.2rem] text-secondary-500" />
                    </span>
                    <span>baths</span>
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="font-[700] text-[1.8rem] flex items-center">
                      1230
                      <RiEdit2Fill className="text-[1.2rem] text-secondary-500" />
                    </span>
                    <span>sqrft</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="">
                    <div className="bg-red-500 rounded-lg text-[0.9rem] text-white flex items-center gap-2 px-2 py-1">
                      <HiX />
                      Cancel this listing
                    </div>
                    <div className="text-[0.9rem] bg-red-200 mt-3 rounded-md px-5">
                      <p>Are you sure</p>
                      <p className="font-[600]">
                        Yes, I want to Cancel this listing.
                      </p>
                    </div>
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
                  Beautiful home that shows pride of ownership from the exterior
                  to all the recent upgrades inside. Roof was replaced in 2021,
                  AC unit in 2020, newer flooring, kitchen cabinets with granite
                  counter-tops, new dual pane windows, fresh interior and
                  exterior paint with newer stucco. Bathrooms were also
                  remodeled and all light fixtures replaced throughout. Home has
                  extended covered parking with large RV gate and a large
                  cement.{" "}
                  <RiEdit2Fill className="text-secondary-500 inline-block" />
                </p>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PropertiesPage;
