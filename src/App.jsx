import "./styles.css";

import usePasswordGenerator from "./hooks/use-password-generator";
import PasswordStrengthIndicator from "./components/strengthChecker";

import { useState } from "react";
import CheckBox from "./components/Checkbox";
import Button from "./components/Button";

export default function App() {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);

  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckBoxChange = (i) => {
    const ucheckBoxData = [...checkBoxData];
    ucheckBoxData[i].state = !ucheckBoxData[i].state;
    setCheckBoxData(ucheckBoxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className="container">
      {/* password text and copy button */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            title={copied ? "Copied" : "copy"}
            onclick={handleCopy}
            customClass="copyBtn"
          />
        </div>
      )}
      {/* character length */}
      <div className="charlen">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min={"4"}
          max={"20"}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* checkboxes */}
      <div className="checkBoxes">
        {checkBoxData.map((checkbox, i) => {
          return (
            <CheckBox
              key={i}
              title={checkbox.title}
              onChange={() => handleCheckBoxChange(i)}
              state={checkbox.state}
            />
          );
        })}
      </div>
      {/* strengths */}
      <PasswordStrengthIndicator password={password} />

      {errorMessage && <div className="err">{errorMessage}!</div>}

      {/* generate buttons  */}

      <Button
        title="Generate Password"
        onclick={() => generatePassword(checkBoxData, length)}
        customClass="generateBtn"
      />
    </div>
  );
}
