import Sidebar from "../components/SideBar/SideBar";
import Map from "../components/Map/Map";
import styles from "./AppLayout.module.css";

function AppLayoutPage() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayoutPage;
