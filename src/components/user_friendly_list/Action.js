import { action_types_data } from "./action_types";
import { timeAgo } from "./utilities";

export default function Action({ row }) {
  let {
    actor_name,
    action_type,
    prevValue,
    currentValue,
    occurred_at,
    actor_img,
  } = row;

  //if there's nothing to show return empty
  if (!actor_name) return "Empty";

  //to get the component json object based on its action_type
  let currentComponent = {};
  action_types_data.map((action) => {
    if (action.action_type == action_type) {
      currentComponent = action;
    }
  });

  let { text, iconUrl, isIconRounded } = currentComponent;
  // assign actor_img if It's the case
  if (iconUrl == "actor_img") {
    iconUrl = actor_img;
  }

  //logic to generate text based on action_type
  switch (currentComponent.type) {
    case "text":
      text = text;
      break;
    case "to_text":
      text = `${text} to ${currentValue}.`;
      break;
    case "from_to_text":
      text = `${text} ${prevValue} to ${currentValue}.`;
      break;
  }

  //Intl utility to get the time ago.
  let parsedDate = timeAgo(new Date(occurred_at));

  //to check if img needs to be rounded or not
  let imgClassesArr = "w-[22px] h-[22px] mr-[9px]";
  if (isIconRounded) {
    imgClassesArr += " rounded-full";
  }

  return (
    <div className="flex items-center mt-[23px]">
      <img src={iconUrl} className={imgClassesArr} />
      <p className="text-sm">
        <strong>{actor_name}</strong> {text} {parsedDate}
      </p>
    </div>
  );
}
