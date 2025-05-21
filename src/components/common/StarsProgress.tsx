import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IStarProgressProps {
  note: number;
  maxNote: number;
}

export default function StarsProgress({ note, maxNote }: IStarProgressProps) {
  const percentage = (note * 100) / maxNote;
  const starNumber = Math.round(maxNote); // always show max number of stars
  return (
    <div className="note-stars-progress">
      <div className="note-stars-bg">
        {Array.from({ length: starNumber }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="note-star empty"
          />
        ))}
      </div>
      <div className="note-stars-fg" style={{ width: `${percentage}%` }}>
        {Array.from({ length: starNumber }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="note-star filled"
          />
        ))}
      </div>
    </div>
  );
}
