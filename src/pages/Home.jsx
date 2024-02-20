import React from "react";
import { Header } from "../layout/Header";
import Footy from "../../public/Img/background/footy.jpg";

export function Home() {
  return (
   <>
        <Header />
        <section className="home">
            <div className="home__container">

                <div className="home__content">

                    <div className="home__text-container">

                        <h2 className="home__title">Bienvenue sur AR Football</h2>
                        <p className="home__text">Découvrez notre application de réalité augmentée pour les amateurs de football ! Découvrez les règles de ce sport si incroyable sur notre application mobile.</p>
                        
                    </div>               
                    <div className="home__download">
                        <p>
                            Télécharger gratuitement notre application ici !
                        </p>
                        <div className="home__apk">
                            <p>Cliquez ci-contre</p>
                        </div>

                    </div>
                </div>


                <div className="home__img-container">
                    <img className="home__img" src={Footy} alt="Footy" />
                    <p className="home__img-text">
                        Venez découvrir notre mascotte Footy !
                    </p>

                </div>
            </div>
            
        </section>
   
   </>

  );
}