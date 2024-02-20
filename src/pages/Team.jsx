import Img1 from "../../public/Img/Team/Adrien.jpg";
import Img2 from "../../public/Img/Team/lucie.jpg";
import Img3 from "../../public/Img/Team/houssam.png";
import Img4 from "../../public/Img/Team/mayel.jpg";

export function Team() {
  return (
    <div className="team">
        <div className="team__container">
            <h1 className="team__title">Voici la Team AR Foot</h1>

            <div className="team__card">
                <div className="team__card-container">
                    <div>
                        <img className="team__card-img" src={Img1} alt="Adrien" />
                        <h2 className="team__card-title">Adrien</h2>
                        <p className="team__card-text">Développeur & Créateur du site</p>
                    </div>

                    <div>
                        <img className="team__card-img" src={Img2} alt="Lucie" />
                        <h2 className="team__card-title">Lucie</h2>
                        <p className="team__card-text">Designer & Créatrice du site</p>
                    </div>

                    <div>
                        <img className="team__card-img" src={Img3} alt="Houssam" />
                        <h2 className="team__card-title">Houssam</h2>
                        <p className="team__card-text">Développeur & Créateur du site</p>
                    </div>

                    <div>
                        <img className="team__card-img" src={Img4} alt="Mayel" />
                        <h2 className="team__card-title">Mayel</h2>
                        <p className="team__card-text">Développeur & Créateur du site</p>
                    </div>

                  
                </div>
            </div>




        </div>
    </div>
  )
}