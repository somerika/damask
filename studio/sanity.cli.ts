import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ew2ovyr4',
    dataset: 'production',
  },
  studioHost: 'damask',
  deployment: {
    appId: 'd6av426kybob90sqb8wqzand',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
