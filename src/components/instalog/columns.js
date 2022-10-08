import LetterCircle from "../generic_components/LetterCircle";
export const columns = [
  {
    key: "icon",
    CustomComponent: (row) => {
      return (
        <div className="text-center mx-auto lg:flex lg:flex-row lg:w-1/3">
          <LetterCircle letter={row.email ? row.email[0] : "A"} />
          <p className="self-center m-0 ml-[10px]">{row.email}</p>
        </div>
      );
    },
  },
  {
    key: "actionName",
  },
  {
    key: "occurred_at",
    parser: (value) => {
      return value ? value.split("T")[0] : value;
    },
  },
];
