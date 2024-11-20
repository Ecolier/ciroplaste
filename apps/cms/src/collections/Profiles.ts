import { CollectionConfig } from "payload";

const Profile: CollectionConfig = {
  slug: "profiles",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "text",
      name: "name",
      required: true,
    },
    {
      type: "text",
      name: "url",
    },
  ],
};

export default Profile;
