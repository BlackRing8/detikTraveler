import React from "react";

const Registrasi = () => {
  return (
    <section className="h-[1213px] lg: w-full bg-registrasi justify-center items-center flex bg-[url('/assets/background_img/bgRegistrasi.png')] bg-cover bg-center">
      <div className="w-[381px] h-[918px] lg:w-full space-y-2 flex-row lg:mt-24">
        <div className="w-full h-[67px] lg:w-[318px]  lg:mx-auto flex-row text-center text-white mb-5">
          <h1 className="text-3xl">Registrasi</h1>
          <h2 className="font-light my-2">Lengkapi data diri kamu dengan benar</h2>
        </div>
        <form className="w-full h-[887px] lg:w-[624px] lg:h-[863px] lg:mx-auto bg-white rounded-2xl px-5 pt-8 flex-col space-y-5">
          <input type="text" className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-[#f8f8f8] placeholder-[#071424]" placeholder="Nama lengkap" />
          <input type="text" className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-[#f8f8f8] placeholder-[#071424]" placeholder="Email" />
          <input type="text" className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-[#f8f8f8] placeholder-[#071424]" placeholder="Nomor Telefon" />
          <p className="text-gray-500">Isi hanya angka</p>
          <textarea
            type="text"
            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[120px]  bg-[#f8f8f8] placeholder-[#071424] placeholder:text-top"
            placeholder="Alasan mengikuti program “Explore Thailand by Detiktravel”*"
          />
          <div className="flex w-full h-[200px]  ">
            <label className="flex flex-col items-center justify-center w-[200px] h-[200px] bg-[#f8f8f8] border border-dashed  rounded-lg cursor-pointer">
              <input type="file" className="hidden" accept="image/*" />
              <div className="flex items-center justify-center w-[60px] h-[60px] bg-white border border-gray-400 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="mt-3 text-sm text-gray-700">Upload Foto Profil</span>
            </label>
            <div className=" px-4 py-6 lg:py-10 flex-row text-sm w-[181px] h-[200px] lg:ml-8 ">
              <h3>1. Format file: .png,.jpg</h3>
              <h3>2. Maksimum ukuran file 1MB</h3>
              <h3>3. Disarankan foto mencakup 3:4 badan</h3>
            </div>
          </div>
          <input type="text" className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-[#f8f8f8] placeholder-[#071424]" placeholder="Link Instagram" />
          <p className="text-gray-500">Contoh: https://www.instagram.com/yourusername</p>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-[#071424] text-sm">
              Dengan menekan tombol "Daftar", Saya menyetujui{" "}
              <a href="" className="text-[#00D1FF]">
                syarat dan ketentuan
              </a>{" "}
              yang berlaku
            </span>
          </label>
          <div className="w-full flex justify-center">
            <button type="submit" className="w-[250px] py-3 bg-[#00D1FF] text-white rounded-md hover:bg-blue-600 transition-all">
              Daftar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registrasi;
