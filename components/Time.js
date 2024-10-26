import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
const HorlogeUdine = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Fonction pour mettre à jour l'heure
    const updateTime = () => {
      const now = new Date();

      // Options pour formater l'heure
      const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true, // Format 12 heures avec AM/PM
        timeZone: "Europe/Rome", // Fuseau horaire pour Udine
        timeZoneName: "short", // Afficher "CEST"
      };

      // Formatage de l'heure
      const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
        now
      );

      // Mise à jour de l'état avec l'heure formatée
      setTime(`PARIS, ${formattedTime}`);
    };

    // Initialiser l'heure dès le chargement
    updateTime();

    // Mettre à jour l'heure toutes les secondes
    const intervalId = setInterval(updateTime, 1000);

    // Nettoyage de l'intervalle quand le composant est démonté
    return () => clearInterval(intervalId);
  }, []);
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`font-projekt 2xl:text-base lg:text-sm font- ${
        isDarkMode ? "text-neutral-800 " : "text-zinc-800"
      }`}
    >
      <p>{time}</p>
    </div>
  );
};

export default HorlogeUdine;
