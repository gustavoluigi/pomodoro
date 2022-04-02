import { useContext } from "react";
import BackButton from "../../components/BackButton";
import SettingsContext from "../../context/SettingsContext";
import { StyledReactSlider } from "./styles";


export default function Settings() {

  const settingsInfo = useContext(SettingsContext)
  // console.log(settingsInfo.workMinutes)
  return (
    <div style={{textAlign: 'left'}}>
      <label>Minutos de trabalhos: {settingsInfo.workMinutes}:00</label>
      <StyledReactSlider
        className='slider'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(Number(newValue))}
        min={1}
        max={120}
      />
      <label>Minutos de descanso: {settingsInfo.breakMinutes}:00</label>
      <StyledReactSlider
        className='slider green'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(Number(newValue))}
        min={1}
        max={120}
      />
      <div style={{textAlign: 'center', marginTop: '2rem'}}>
        <BackButton  onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
        
    </div>
  )
}