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
          Gyere el júliusban a Sopron megyei Egyházasfaluba,<br></br> és próbáld
          ki a vidéki fenntartható életmódot!
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
        <div className="box references">
          <br></br>
          <div>
            <em>"Ez a világ legjobb tábora! Én jövőre is akarok jönni!"</em> —
            Bogi, 8 éves
          </div>
          <br></br>
          <div>
            <em>
              "Ilyen táborra van szüksége a gyerekeknek. Nagyon köszönjük a
              szervezést!"
            </em>{" "}
            — Pálné Szilvia
          </div>
        </div>
      </div>
      <div className="map-container">
        <div className="box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.3536766518823!2d16.764416915625585!3d47.46353697917546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476ea7ea60efb269%3A0xcbfac04169fa7aba!2zU2ltb255aSBLw6Fyb2x5IMOBbHRhbMOhbm9zIElza29sYSDDqXMgw5N2b2Rh!5e0!3m2!1sen!2shu!4v1617527338565!5m2!1sen!2shu"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          />
        </div>
        <div className="box info">
          <div>
            <h4>
              Jelentkezési határidő: <br></br>2021. május 24.
            </h4>
            <br></br>
            <h4>Tábor időpontjai:</h4>
            <p>2021. július 4. - július 9. (korosztály: 3-4. osztály)</p>
            <p>2021. július 11. - július 16. (korosztály: 3-4. osztály)</p>
            <p>2021. július 18. - július 23. (korosztály: 5-6. osztály)</p>
            <br></br>
            <h4>Helyszín:</h4>
            <p>Egyházasfalu, Simonyi Károly Általános Iskola és környéke</p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="copyright">
        <p>© Zöld Fonó Tábor 2018–2021</p>
      </div>
      <br></br>
    </div>
  );
};

export default MainComponent;
