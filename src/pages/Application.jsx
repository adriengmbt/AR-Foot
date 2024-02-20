import { FirstCard, SecondCard, ThirdCard } from "../components/CardContent";



export function Application() {
  return (
    <div className="application">
        <div className="application__container">
            <h2 className="application__title">Voici comment se présente notre application !</h2>

            <div className="application__card-content">
                <div className="application__first-card card">
                    <FirstCard />
                </div>

                <div className="application__second-card card">
                    <SecondCard />
                </div>

                <div className="application__third-card card">
                    <ThirdCard />
                </div>

            </div>

        </div>
    
    </div>
  );
}