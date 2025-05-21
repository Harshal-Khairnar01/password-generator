
import "../styles.css";

const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLen = password.length;
    if (passwordLen < 1) {
      return "";
    } else if (passwordLen < 4) return "very weak";
    else if (passwordLen < 8) return "Poor";
    else if (passwordLen < 12) return "Medium";
    else if (passwordLen < 16) return "Strong";
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
