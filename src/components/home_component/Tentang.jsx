import React from "react";
import About from "/assets/about-image1.png";
import { Link } from "react-router-dom";

const Tentang = () => {
  return (
    <section id="tentang-program" className="relative h-[1240px] lg:h-[1024px] w-[430]flex-row lg:flex tentang">
      <div className="flex w-full h-[400px] lg:w-1/2 lg:h-full  justify-center items-center">
        <div className=" w-[330px] lg:w-[630px] lg:h-[550px] h-[290px]">
          <img src={About} alt="about image" className="w-auto h-auto" />
        </div>
      </div>
      <div className="w-full h-[840px] lg:w-1/2 lg:h-full justify-center lg:items-center flex">
        <div className="flex-row ">
          <div className="flex-row w-[390px] h-[300px] lg:w-[630px] lg:[225px]">
            <h1 className="text-white font-bold text-2xl p-2 tracking-wider">Tentang Program</h1>
            <p className="p-2 text-white font-medium tracking-wide mb-3">
              Bergabunglah dalam "Explore Thailand bersama Detiktravel"! Kompetisi ini terbuka bagi pembaca Detiktravel yang ingin menikmati perjalanan ke Thailand. Kunjungi destinasi menakjubkan seperti pantai Pak Bia Island dan destinasi
              lain di Phuket, Thailand. Jadi bagian dari perjalanan kami dan menangkan hadiah jalan-jalan yang tak terlupakan!
            </p>
            <Link to="/registrasi" className="px-8 py-2 border-transparent rounded-full text-white bg-[#FFC73C] hover:bg-[#c4a75d] hover:shadow-lg font-bold ">
              DAFTAR SEKARANG
            </Link>
          </div>
          <div className="flex-row w-[390px] h-[421px]  lg:w-[566px] lg:h-[417px]">
            <h1 className="text-white font-bold text-2xl p-2 tracking-wider">Mekanisme</h1>
            <div className="flex w-full h-1/3 lg:h-[109px]">
              <div className="flex h-full lg:w-[37px] w-[40px] ">
                <svg width="39" height="128" viewBox="0 0 39 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="19.5" cy="19.5" r="11.5" fill="white" />
                  <circle cx="19.5" cy="19.5" r="18.5" stroke="white" strokeWidth="2" />
                  <line x1="20" y1="46" x2="20" y2="115" stroke="white" strokeDasharray="4 4" />
                </svg>
              </div>
              <div className="flex-row ml-3">
                <h2 className="text-white tracking-wider text-2xl">Isi Formulir</h2>
                <h2 className="text-[#FFE03C] tracking-wider text-xl mt-2">1 - 31 Mei 2023</h2>
                <p className="text-white mt-2">Lengkapi formulir pendaftaran dengan data sebenarnya</p>
              </div>
            </div>
            <div className="flex w-full h-1/3 lg:h-[109px] ">
              <div className="flex h-full w-[40px] lg:w-[37px] ">
                <svg width="39" height="128" viewBox="0 0 39 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="19.5" cy="19.5" r="11.5" fill="white" />
                  <circle cx="19.5" cy="19.5" r="18.5" stroke="white" strokeWidth="2" />
                  <line x1="20" y1="46" x2="20" y2="115" stroke="white" strokeDasharray="4 4" />
                </svg>
              </div>
              <div className="flex-row ml-3">
                <h2 className="text-white tracking-wider text-2xl">Penjurian</h2>
                <h2 className="text-[#FFE03C] tracking-wider text-xl mt-2">1 - 7 Juni 2023</h2>
                <p className="text-white mt-2">Ikuti rangkaian penjurian online/offline</p>
              </div>
            </div>
            <div className="flex w-full h-1/3 lg:h-[109px] ">
              <div className="flex h-full w-[40px] lg:w-[37px] ">
                <svg width="39" height="128" viewBox="0 0 39 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="19.5" cy="19.5" r="11.5" fill="white" />
                  <circle cx="19.5" cy="19.5" r="18.5" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex-row ml-3">
                <h2 className="text-white tracking-wider text-2xl">Pengumuman Pemenang</h2>
                <h2 className="text-[#FFE03C] tracking-wider text-xl mt-2">11 Juni 2023</h2>
                <p className="text-white mt-2">Ikuti rangkaian penjurian online/offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
