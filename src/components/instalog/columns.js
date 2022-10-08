import LetterCircle from "../generic_components/LetterCircle";
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

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
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let parsedDate = "";
      if (value) {
        value = new Date(value);
        parsedDate += months[value.getMonth()];
        parsedDate += " " + value.getDay() + ", ";
        parsedDate += " " + formatAMPM(value);
        return parsedDate;
      } else {
        return value;
      }
    },
  },
];
