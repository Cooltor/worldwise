import Sidebar from "../components/SideBar/SideBar";
import Map from "../components/Map/Map";
import User from "../components/User";
import styles from "./AppLayout.module.css";

function AppLayoutPage() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayoutPage;
