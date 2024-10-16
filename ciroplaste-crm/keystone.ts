// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from "@keystone-6/core";

// to keep this file tidy, we define our schema in a different file
import { lists } from "./src/schema";

export default config({
  server: {
    cors: true,
  },
  db: {
    // we're using sqlite for the fastest startup experience
    //   for more information on what database might be appropriate for you
    //   see https://keystonejs.com/docs/guides/choosing-a-database#title
    provider: "sqlite",
    url: "file:./keystone.db",
  },
  lists,
  storage: {
    local_images: {
      kind: 'local',
      type: 'image',
      generateUrl: path => `http://172.20.10.3:3000/images${path}`,
      serverRoute: {
        path: '/images',
      },
      storagePath: 'public/images',
    },
    /** more storage */
  }
  
});
