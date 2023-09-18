import styles from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="No cities to show" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
