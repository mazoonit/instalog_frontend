import "./styles/footer.css";
import Loader from "./Loader";
export default function Footer({ loadMore, isLoadingMore, isReachingEnd }) {
  return (
    <dev
      className="footer"
      onClick={() => {
        if (!isLoadingMore && !isReachingEnd) {
          loadMore();
        }
      }}
    >
      {isLoadingMore ? (
        <Loader />
      ) : isReachingEnd ? (
        <p>NO MORE LOGS!</p>
      ) : (
        <p>LOAD MORE</p>
      )}
    </dev>
  );
}
