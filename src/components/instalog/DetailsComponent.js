//import "./DetailsComponent.css";
const TitledAttribute = ({ title, value, fontSize }) => {
  if (!fontSize) {
    fontSize = "13px";
  }
  return (
    <tr>
      <td>
        <p className="mr-[10px] text-[#929292] text-sm">{title}</p>
      </td>
      <td>
        <p className="text-sm"> {value}</p>
      </td>
    </tr>
  );
};
export default function DetailsComponent({ row }) {
  const titleColor = "#929292";
  const fontWeight = 500;
  const Title = ({ title }) => {
    return (
      <p
        style={{ color: titleColor, fontWeight: fontWeight }}
        className="mb-[10px] text-center lg:text-justify"
      >
        {title}
      </p>
    );
  };
  let detailsComponentParagraphClasses =
    "flex flex-col w-[100%] lg:w-[33%] text-justify";
  return (
    <dev className="flex flex-row justify-around items-stretch flex-wrap content-start w-[100%] p-2.5">
      <dev className={detailsComponentParagraphClasses}>
        <Title title="ACTOR" />
        <table className="mx-auto lg:mx-0">
          <TitledAttribute
            title={"Name"}
            value={row.actor ? row.actor.name : null}
          />
          <TitledAttribute
            title={"Email"}
            value={row.actor ? row.actor.email : row.actor.email}
          />
          <TitledAttribute
            title={"ID"}
            fontSize={"10px"}
            value={row.actor ? row.actor.id : null}
          />
        </table>
      </dev>
      <dev className={detailsComponentParagraphClasses}>
        <Title title="ACTION" />
        <table className="mx-auto lg:mx-0">
          <TitledAttribute
            title={"Name"}
            value={row.action ? row.action.name : null}
          />
          <TitledAttribute title={"Object"} value={"event_action"} />
          <TitledAttribute
            title={"ID"}
            value={row.action ? row.action.id : null}
            fontSize={"10px"}
          />
        </table>
      </dev>
      <dev className={detailsComponentParagraphClasses}>
        <dev className="mx-auto lg:mx-0">
          <Title title="DATE" />
          <TitledAttribute
            title={"DATE"}
            value={row.occurred_at ? row.occurred_at.split("T")[0] : null}
          />
        </dev>
      </dev>
      <dev className={detailsComponentParagraphClasses+' mt-[7px]'}>
        <Title title="METADATA" />
        <div class="block w-[70%] h-[15px] bg-[#f5f5f5]"></div>
      </dev>
      <dev className={detailsComponentParagraphClasses+' mt-[7px]'}>
        <Title title="TARGET" />
        <div class="block w-[70%] h-[15px] bg-[#f5f5f5]"></div>
      </dev>
      <dev className={detailsComponentParagraphClasses}></dev>
    </dev>
  );
}
