import { PASSWORD_MIN_LENGTH } from "../constants";
import "../styles.css";

const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLen = password.length;
    if (passwordLen < 1) {
      return "";
    } else if (passwordLen < PASSWORD_MIN_LENGTH) return "very weak";
    else if (passwordLen < PASSWORD_MIN_LENGTH * 2) return "Poor";
    else if (passwordLen < PASSWORD_MIN_LENGTH * 4) return "Medium";
    else if (passwordLen < PASSWORD_MIN_LENGTH * 5) return "Strong";
    else return "Very Strong";
  };
  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <></>;
  return (
    <div className="password-strength">
      Strength:<span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
