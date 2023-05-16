import data from "../datas/logements.json";
import Card from "./Card";


const Locations = () => {
  return (
    <main className="locations">
        <div className="locations_container">
      {
        data.map((location, id) => <Card key={id} location={location} />)}
        </div>
    </main>
  );
};

export default Locations;
