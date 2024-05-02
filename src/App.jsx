import Roshid from "./assets/roshid.jpg";
import Toqs from "../Quran/Mishary_099.mp3";

import Yuz from "../Quran/Mishary_100.mp3";
import Yuzb from "../Quran/Mishary_101.mp3";
import Yuzk from "../Quran/Mishary_102.mp3";
import Yuzch from "../Quran/Mishary_103.mp3";
import Yuzt from "../Quran/Mishary_104.mp3";
import Yuzbe from "../Quran/Mishary_105.mp3";
import Yuzo from "../Quran/Mishary_106.mp3";
import Yuzy from "../Quran/Mishary_107.mp3";
import Yuzsa from "../Quran/Mishary_108.mp3";
import Yuzto from "../Quran/Mishary_109.mp3";
import Yuzon from "../Quran/Mishary_110.mp3";
import Yuzonb from "../Quran/Mishary_111.mp3";
import Yuzonch from "../Quran/Mishary_113.mp3";
import Yuzont from "../Quran/Mishary_114.mp3";
export default function App() {
  return (
    <div className="justify-center flex">
      <div className="gap">
        <img className="rounded-[12px]" src={Roshid} alt="" />
        <div className="rounded-[8px]  mt-3 items-center bg-slate-200 p-2">
          <p>99 | الزلزَلة</p>
          <audio src={Toqs} controls></audio>
        </div>

        <div className="rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>100 | العَادِيات</p>
          <audio src={Yuz} controls></audio>
        </div>

        <div className="rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>101 | القارِعَة</p>
          <audio src={Yuzb} controls></audio>
        </div>

        <div className="rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>102 | التَكاثـُر</p>
          <audio src={Yuzk} controls></audio>
        </div>

        <div className="rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>103 | العَصْر</p>
          <audio src={Yuzch} controls></audio>
        </div>

        <div className="rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>104 | الهُمَزَة</p>
          <audio src={Yuzt} controls></audio>
        </div>

        <div className="rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>105 | الفِيل</p>
          <audio src={Yuzbe} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>106 | قـُرَيْش</p>
          <audio src={Yuzo} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>107 | المَاعُون</p>
          <audio src={Yuzy} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>108 | الكَوْثَر</p>
          <audio src={Yuzsa} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>109 | الكَافِرُون</p>
          <audio src={Yuzto} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>110 | النـَّصر</p>
          <audio src={Yuzon} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>111 | المَسَد</p>
          <audio src={Yuzonb} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>113 | الفَلَق</p>
          <audio src={Yuzonch} controls></audio>
        </div>

        <div className=" rounded-[8px] mt-3 items-center bg-slate-200 p-2">
          <p>114 | النَّاس</p>
          <audio src={Yuzont} controls></audio>
        </div>
      </div>
    </div>
  );
}
