import React from "react";
import Logo from "/assets/logo/group.png";
import Artikel1 from "/assets/artikel-1.png";
import Artikel2 from "/assets/artikel-2.png";
import Artikel3 from "/assets/artikel-3.png";
import Artikel4 from "/assets/artikel-4.png";

const Berita = () => {
  return (
    <section id="berita" className="w-full h-[1090px] lg:h-[1000px] bg-berita justify-center flex pt-24 bg-[url('/assets/background_img/bgBerita.png')] bg-cover bg-center">
      <div className="w-[400px] h-[900px] lg:w-[1296px] lg:h-[698px]  flex-row  lg:pt-8 lg:mt-10">
        {/* Logo */}
        <div className="flex ">
          <div className=" w-[160px] h-[26.4px] mt-3">
            <img src={Logo} alt="logo detik travel" className="w-full h-full" />
          </div>
          <h1 className="text-[#F79820] font-bold text-4xl lg:ml-3">Update</h1>
        </div>
        {/* Artikel */}
        <div className=" lg:flex">
          {/* Artikel 1 */}
          <div className="flex-row mt-5  lg:w-1/2">
            <a href="" className="w-[400px] h-[304px] lg:w-[636px] lg:h-[607px] rounded-3xl flex-row text-white hover:text-yellow-500 transition-colors duration-300">
              <div className="w-full h-[209px] lg:h-[480px] overflow-hidden ">
                <img src={Artikel1} className="w-full h-full rounded-t-3xl hover:scale-110" alt="" />
              </div>
              <div className="w-full h-[95px] lg:h-[127px] bg-[#00D1FF] rounded-b-3xl flex-row">
                <h3 className=" ml-5 pt-2 lg:text-xl">Warga Thailand pakai Boneka Doraemon untuk Ritual Pemanggil Hujan</h3>
                <p className="text-lg  ml-5">3 Jam Yang lalu</p>
              </div>
            </a>
          </div>
          {/* Artikel 2-4 */}
          <div className="w-[400px] flex-row  h-[740px] mt-10 lg:mt-0  lg:w-1/2 lg:pl-10">
            <a href="" className="h-[130px] lg:h-[146px] w-[400] flex  my-5 lg:mb-7 hover:text-[#00D1FF]">
              <div className="w-[130px] h-[130px] lg:h-[146px] lg:w-[195px] overflow-hidden ">
                <img src={Artikel2} className="h-full w-full rounded-2xl hover:scale-110" alt="" />
              </div>
              <div className="flex-row w-[270px]">
                <h3 className="px-2"> Thailand Ngarep Cuan Banyak dari Turis China dan Jepang</h3>
                <p className="text-sm px-2 text-black">1 Jam Yang lalu</p>
              </div>
            </a>
            <a href="" className="h-[130px] lg:h-[146px] w-[400] flex  my-5 lg:my-7 hover:text-[#00D1FF]">
              <div className="w-[130px] h-[130px] lg:h-[146px] lg:w-[195px] overflow-hidden ">
                <img src={Artikel3} className="h-full w-full rounded-2xl hover:scale-110" alt="" />
              </div>
              <div className="flex-row w-[270px]">
                <h3 className="px-2"> Cahaya Lampu Hiasi Kuil Wat Phra Dhammakaya Thailand Saat Waisak</h3>
                <p className="text-sm px-2 text-black">1 Jam Yang lalu</p>
              </div>
            </a>
            <a href="" className="h-[130px] lg:h-[146px] w-[400] flex  my-5 lg:mh-7 hover:text-[#00D1FF]">
              <div className="w-[130px] h-[130px] lg:h-[146px] lg:w-[195px] overflow-hidden ">
                <img src={Artikel4} className="h-full w-full rounded-2xl hover:scale-110" alt="" />
              </div>
              <div className="flex-row w-[270px]">
                <h3 className="px-2"> Cantiknya Lisa BLACKPINK Berwisata Sejarah di Thailand</h3>
                <p className="text-sm px-2 text-black">1 Jam Yang lalu</p>
              </div>
            </a>
            {/* button */}
            <div className="h-[100px] w-[400] flex   items-center justify-center">
              <a className="bg-[#00D1FF] w-[245px] lg:w-full h-[52px] justify-center items-center flex rounded-2xl lg:mt-8  text-white hover:bg-[#FFC73C]" href="">
                <p className="mr-2">Lihat Berita lainnya</p>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7C0 6.73483 0.111929 6.48052 0.311164 6.29302C0.5104 6.10552 0.78062 6.00018 1.06238 6.00018H13.3711L8.80927 1.70896C8.60978 1.52122 8.49771 1.26659 8.49771 1.00108C8.49771 0.735579 8.60978 0.48095 8.80927 0.293211C9.00875 0.105471 9.27932 0 9.56143 0C9.84355 0 10.1141 0.105471 10.3136 0.293211L16.6879 6.29213C16.7868 6.385 16.8653 6.49533 16.9189 6.6168C16.9724 6.73827 17 6.86849 17 7C17 7.13151 16.9724 7.26173 16.9189 7.3832C16.8653 7.50467 16.7868 7.615 16.6879 7.70787L10.3136 13.7068C10.1141 13.8945 9.84355 14 9.56143 14C9.27932 14 9.00875 13.8945 8.80927 13.7068C8.60978 13.5191 8.49771 13.2644 8.49771 12.9989C8.49771 12.7334 8.60978 12.4788 8.80927 12.291L13.3711 7.99982H1.06238C0.78062 7.99982 0.5104 7.89448 0.311164 7.70698C0.111929 7.51948 0 7.26517 0 7Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
