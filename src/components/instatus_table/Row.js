export default function Row({ isActive, activeRow, id }) {
  let className = "row ";
  useEffect(() => {
    if (isActive) {
      className = "row active";
    } else {
      className = "row";
    }
  }, [isActive]);
  return <dev className={className} onClick={activeRow} id={id}></dev>;
}
