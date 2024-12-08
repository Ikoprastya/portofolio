import React from "react";
import saya from "../assets/iam.png";


const Content = () => {


  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start px-6 sm:px-12 md:px-20 lg:px-48 mt-10 md:mt-20 mb-10">
      {/* Bagian teks di kiri */}
      <div className="text-center md:text-start my-6 md:my-12 md:w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Hi, Saya Iko Prastya, <br /> Web Developer
        </h1>

        <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
          Saya <strong>Iko Prastya</strong>, seorang web developer dengan pengalaman 4 tahun di bidang teknologi.
          Selama masa studi, saya telah menyelesaikan berbagai proyek, termasuk pengembangan website
          <em> Wibaloka</em>, yang menjadi salah satu karya terbaik saya. Selain itu, saya juga pernah berkontribusi
          sebagai Web Developer dalam tim <em>Jumpa Vendor</em> pada program nasional
          <strong> P2MW (Program Pengembangan Mahasiswa Wirausaha)</strong>. Dengan dedikasi dan keterampilan teknis,
          saya selalu berupaya memberikan solusi terbaik dalam setiap proyek yang saya tangani.
        </p>

        <button
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() =>
            window.open(
              'https://wa.me/+6281916053551?text=Halo%20Iko%20Prastya,%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.',
              '_blank'
            )
          }
        >
          Contact now!
        </button>
      </div>

      {/* Bagian gambar di kanan */}
      <div className="md:w-1/2 flex justify-center md:justify-end md:pl-10">
        <img
          src={saya}
          alt="Iko Prastya"
          className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-full shadow-lg"
        />
      </div>
    </div>


  );
};

export default Content;
