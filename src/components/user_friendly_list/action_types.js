export const action_types_data = [
  {
    action_type: "user.created_issue",
    type: "text",
    text: "create the issue.",
    iconUrl: "actor_img",
    isIconRounded: true,
  },
  {
    action_type: "user.updated_description",
    type: "text",
    text: "updated the description of the issue.",
    iconUrl: "", //static
    isIconRounded: true,
  },
  {
    action_type: "user.set_priority",
    type: "to_text",
    text: "set the priority",
    low_iconUrl: "",
    medium_iconUrl: "",
    high_iconUrl: "",
    iconUrl:
      "https://user-images.githubusercontent.com/29822073/195952469-e1ed627f-8653-4cc5-bbf0-e16b13a9c2dd.png", //static
    isIconRounded: false,
  },
  {
    action_type: "user.assign_issue",
    type: "to_text",
    text: "assigned the issue",
    iconUrl: "actor_img",
    isIconRounded: true,
  },
  {
    action_type: "user.change_status",
    type: "from_to_text",
    text: "changed status from ",
    inProgress_icon: "",
    inReview_icon: "",
    iconUrl:
      "https://user-images.githubusercontent.com/29822073/195952467-b3e54d69-3d75-45aa-b364-db4c8a278c6b.png", //static
    isIconRounded: true,
  },
  {
    action_type: "user.update_name",
    type: "from_to_text",
    text: "updated the name of the issue from ",
    iconUrl: "", //static
  },
];
