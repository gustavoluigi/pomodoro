import { useState } from "react";
import Settings from "../Settings";
import Timer from "../../components/Timer";
import GlobalStyles from '../../assets/styles/global';
import SettingsContext from "../../context/SettingsContext";

function Home() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)
  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setShowSettings,
        setWorkMinutes,
        setBreakMinutes
      }}>
      <GlobalStyles />

      {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default Home;