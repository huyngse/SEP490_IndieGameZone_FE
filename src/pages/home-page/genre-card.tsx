import { Link } from "react-router-dom";

const GenreCard = ({
  title,
  to,
  background,
}: {
  title: string;
  to: string;
  background: string;
}) => {
  return (
    <Link to={to} className="nft-card">
      <div className="main">
        <img className="tokenImage" src={background} alt="Genre card" />
        <div className="p-1">
          <h2 className="text-center uppercase tracking-widest">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default GenreCard;
