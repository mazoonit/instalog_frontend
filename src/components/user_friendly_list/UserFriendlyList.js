import react, { useState, useEffect } from "react";
import API from "../../utilities/api";
import Action from "./Action";

export default function UserFriendlyList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let x = async () => {
      let { data } = await API.get("/events");
      //parsing meta_data
      data.map((row) => {
        row.meta_data = JSON.parse(row.meta_data);
      });
      setData(data);
    };
    x();
  }, []);

  return (
    <div className="w-[60%] mx-auto pt-[5rem]">
      <p className="mb-[5px] font-semibold tex-sm">Activity</p>
      {data.map((row) => {
        let parsedRow = {
          actor_name: row.actor?.name,
          action_type: row.action?.name,
          prevValue: row.meta_data?.prevValue,
          currentValue: row.meta_data?.currentValue,
          occurred_at: row.occurred_at,
          actor_img: row.meta_data?.actor_img_url,
        };
        return (
          <div>
            <Action row={parsedRow} />
          </div>
        );
      })}
    </div>
  );
}
