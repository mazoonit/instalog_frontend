import "./styles/footer.css";
export default function Footer({ loadMore }) {
  return (
    <dev
      className="footer"
      onClick={() => {
        loadMore();
      }}
    >
      <p>LOAD MORE</p>
    </dev>
  );
}
