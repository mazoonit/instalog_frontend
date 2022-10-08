//import "./DetailsComponent.css";
/**
 *
 * Titled Attritube Component
 * key value in shape of -> x : y
 *
 *
 */
import { dateParser } from "./utilities";
const TitledAttribute = ({ title, value, fontSize }) => {
  if (!fontSize) {
    fontSize = "13px";
  }
  return (
    <>
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <p className="mr-[10px] text-[#929292] text-sm">{title}</p>
          </td>
          <td>
            <p className="text-sm"> {value}</p>
          </td>
        </tr>
      </tbody>
    </>
  );
};

/**
 *
 * Title Component
 */
const Title = ({ title }) => {
  const titleColor = "#929292";
  const fontWeight = 500;
  return (
    <p
      style={{ color: titleColor, fontWeight: fontWeight }}
      className="mb-[10px] text-center lg:text-justify"
    >
      {title}
    </p>
  );
};

export default function DetailsComponent({ row }) {
  let detailsComponentParagraphClasses =
    "flex flex-col w-[100%] lg:w-[33%] text-justify";
  return (
    <div className="flex flex-row justify-around items-stretch flex-wrap content-start w-[100%] p-2.5">
      <div className={detailsComponentParagraphClasses}>
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
      </div>
      <div className={detailsComponentParagraphClasses}>
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
      </div>
      <div className={detailsComponentParagraphClasses}>
        <div className="mx-auto lg:mx-0">
          <Title title="DATE" />
          <table>
            <TitledAttribute
              title={"Readable"}
              value={dateParser(row.occurred_at)}
            />
          </table>
        </div>
      </div>
      <div className={detailsComponentParagraphClasses + " mt-[7px]"}>
        <Title title="METADATA" />
        <div className="block w-[70%] h-[15px] bg-[#f5f5f5]"></div>
      </div>
      <div className={detailsComponentParagraphClasses + " mt-[7px]"}>
        <Title title="TARGET" />
        <div className="block w-[70%] h-[15px] bg-[#f5f5f5]"></div>
      </div>
      <div className={detailsComponentParagraphClasses}></div>
    </div>
  );
}
