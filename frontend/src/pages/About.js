import "./About.css";
import React from "react";
import honey from "../components/Footer/logo.jpg";

export default function About() {
  return (
    <div class="flex-container">
      <div class="flex-item-left">
        <h3>عسل الريم</h3>
        <img src={honey} alt="honey pic" />
      </div>

      <div class="flex-item-right">
        <p>
          "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
          انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
          يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
          ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا
          باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت
          ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
        </p>
      </div>
    </div>
  );
}
