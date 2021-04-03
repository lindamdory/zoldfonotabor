import logo1 from "../files/logo-topleft.png";
import logo2 from "../files/logo-topright.png";
import sunsnail from "../files/sunsnail.jpg";
import program1 from "../files/program1.jpg";
import program2 from "../files/program2.jpg";
import program3 from "../files/program3.jpg";
import children from "../files/children.jpg";
import application from "../files/ZFT2021_jelentkezesi_lap.doc";
import zft2021 from "../files/ZFT2021.pdf";

const MainComponent = () => {
  return (
    <div>
      <img className="logo1" src={logo1} alt="logo" />
      <img className="logo2" src={logo2} alt="logo" />
      <div className="title-container">
        <br></br>
        <h1 className="title">Zöld Fonó Tábor</h1>
        <br></br>
        <h3 className="subtitle">
          Gyere el júliusban Egyházasfaluba,<br></br> és próbáld ki a vidéki
          fenntartható életmódot!
        </h3>
        <br></br>
        <p className="description">
          A kecskétől a sajtig, a Naptól a számítógépig, a gyümölcsfától a
          kalácsig, a birkától a nemezig... Napelemes jármű, önellátó ökoház,
          lovaglás, méhészkedés, kecskefejés, hódles, csillagászat és más
          érdekességek!
        </p>
      </div>
      <br></br>
      <div className="sunsnail-container">
        <img className="sunsnail" src={sunsnail} alt="napcsiga" />
      </div>
      <br></br>
      <div className="contact-container">
        <p>
          Töltsd le a{" "}
          <a href={application} target="_blank" rel="noreferrer">
            <b>jelentkezési lapot</b>
          </a>
          , és küldd vissza kitöltve <br></br>Kéry Magdolna táborszervezőnek
          emailben 2021. május 24-ig!
        </p>
        <br></br>
        <p>
          Kövesd a Zöld Fonó Tábor híreit a{" "}
          <a
            href="https://www.facebook.com/zoldfonotabor2021"
            target="_blank"
            rel="noreferrer"
          >
            <b>Facebookon</b>
          </a>{" "}
          is!
        </p>
      </div>
      <div className="main-container">
        <div className="box">
          <img className="img" src={program1} alt="program" />
          <a
            href="https://drive.google.com/drive/folders/1-lEDhYO90OfXuzk2UdeEDw1wTXx0PqLy"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-photos">Képek</button>
          </a>
        </div>
        <div className="box">
          <img className="img" src={program2} alt="program" />
          <a href={zft2021} target="_blank" rel="noreferrer">
            <button className="btn btn-program">Programok</button>
          </a>
        </div>
        <div className="box">
          <img className="img" src={program3} alt="program" />
          <a href={application} target="_blank" rel="noreferrer">
            <button className="btn btn-apply">Jelentkezés</button>
          </a>
        </div>
      </div>
      <div className="footer-container">
        <div className="box">
          <img className="img" src={children} alt="gyerekek" />
        </div>
        <div className="box">
          <br></br>
          <p>
            <em>"Ez a világ legjobb tábora! Én jövőre is akarok jönni!"</em> —
            Bogi, 8 éves
          </p>
          <br></br>
          <p>
            <em>
              "Ilyen táborra van szüksége a gyerekeknek. Nagyon köszönjük a
              szervezést!"
            </em>{" "}
            — Pálné Szilvia
          </p>
        </div>
      </div>
      <div className="footer">
        <p>© Zöld Fonó Tábor 2018–2021</p>
      </div>
      <br></br>
    </div>
  );
};

export default MainComponent;
