import { Card } from "./Card";


export function FirstCard() {
  return (
        < Card
            title="Règle n°1"
            firstText="Un stade fragmenté en plusieurs parties"
            text="Notre application est découpée en plusieurs parties tel que le corner, la touche ou encore le penalty."
         />
  );
}

export function SecondCard() {
  return (
        < Card
            title="Règle n°2"
            firstText="Footy et ses explications"
            text="Footy, vous accompagnera et vous expliquera les règles du football en anglais et en français."
         />
  );
}

export function ThirdCard() {
  return (
        < Card
            title="Règle n°3"
            firstText="Un quiz pour tester vos connaissances"
            text="Un quiz sera disponible pour tester vos connaissances sur les règles du football et vous permettre de vous améliorer."
         />
  );
}