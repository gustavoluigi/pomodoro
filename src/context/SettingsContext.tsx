import { createContext } from "react";

export interface ISettingsContextData {
  workMinutes: number,
  breakMinutes: number,
  setShowSettings: (value: boolean) => void,
  setWorkMinutes: (value: number) => void,
  setBreakMinutes: (value: number) => void,
}

export const settingsContextDefaultValue: ISettingsContextData = {
  workMinutes: 45,
  breakMinutes: 15,
  setShowSettings: () => null,
  setWorkMinutes: () => null,
  setBreakMinutes: () => null
}

const SettingsContext = createContext<ISettingsContextData>(settingsContextDefaultValue);

export default SettingsContext;