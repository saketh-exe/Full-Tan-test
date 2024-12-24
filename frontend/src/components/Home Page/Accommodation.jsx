import React from "react";
import { BackgroundBeams } from "../ui/BackgroundBeams";

export default function Accommodation() {
  return (
    <div className="bg-accom_bg text-white min-h-screen">
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold mb-8">Travel & Accommodation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-10">
          {/* Accommodation Card */}
          <div className="flex justify-center items-center">
            <div className="bg-accom_card_bg p-6 rounded-lg shadow-lg w-3/4">
              <h2 className="text-xl font-semibold mb-4">Accommodation</h2>
              <p className="text-sm mb-4 text-justify">
                For participants who seek accommodation in the college campus
                during the course of the fest, register yourself by clicking the
                link;
              </p>
              <button className="w-full text-black my-2 p-2 font-bold bg-booknow_bg rounded-lg hover:bg-transparent hover:border-solid hover:border-2 hover:border-booknow_bg hover:text-white">
                Book Now
              </button>
              <div className="bg-blue-100 text-blue-900 p-4 mt-4 mb-4 rounded-lg text-xs font-semibold">
                ** only limited seats are available and facilities will be
                provided in FIRST COME FIRST SERVE basis
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                <div className="text-black text-sm font-medium bg-phone_bg p-3 rounded-lg">
                  <p>BOYS</p>
                  <p className="font-semibold mt-2">Ph: +91 9392167089</p>
                </div>
                <div className="text-black text-sm font-medium bg-phone_bg p-3 rounded-lg">
                  <p>GIRLS</p>
                  <p className="font-semibold mt-2">Ph: +91 8309249658</p>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Card */}
          <div className="flex justify-center items-center">
            <div className="bg-accom_card_bg p-6 rounded-lg shadow-lg w-3/4">
              <h2 className="text-xl font-semibold mb-4">Travel</h2>
              <p className="text-sm mb-4 text-justify">
                For participants who might need the services of college
                transport during the course of the fest, register yourself by
                clicking the link;
              </p>
              <button className="w-full text-black my-2 p-2 font-bold bg-booknow_bg rounded-lg hover:bg-transparent hover:border-solid hover:border-2 hover:border-booknow_bg hover:text-white">
                Book Now
              </button>
              <div className="bg-blue-100 text-blue-900 p-4 mt-4 mb-4 rounded-lg text-xs font-semibold">
                ** only limited seats are available and facilities will be
                provided in FIRST COME FIRST SERVE basis
              </div>
              <div className="text-black text-sm font-medium bg-phone_bg p-3 rounded-lg">
                <p>College Transport</p>
                <p className="mt-2 font-semibold">Ph: +91 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
