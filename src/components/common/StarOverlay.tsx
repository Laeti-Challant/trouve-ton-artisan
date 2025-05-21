import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IStarOverlayProps {
  note: number;
  maxNote: number;
}

export default function StarOverlay({ note, maxNote }: IStarOverlayProps) {
  const percentage = (note * 100) / maxNote;
  const starNumber = Math.round(note);
  return (
    <div className="star-overlay">
      <div className="stars stars-light">
        {Array.from({ length: maxNote }, (_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </div>
      <div className="stars stars-primary" style={{ width: `${percentage}%` }}>
        {Array.from({ length: starNumber }, (_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </div>
    </div>
  );
}
