import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type FavoriteButtonProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
  return (
    <button
      className="border-2 border-white p-2 rounded-full hover:border-cyan-300 transition"
      onClick={onClick}
    >
      {isFavorite ? (
        <FavoriteIcon style={{ color: "#f44336" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </button>
  );
}