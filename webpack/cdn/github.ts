import { jsDelivr } from './jsdelivr'
import { CdnConfig } from './types'

const owner = 'sunrisewestern'
const host = 'raw.githubusercontent.com'
export const github: CdnConfig = {
  name: 'GitHub',
  owner,
  host,
  stableClient: `https://${host}/${owner}/Bilibili-Evolved/master/dist/bilibili-evolved.user.js`,
  previewClient: `https://${host}/${owner}/Bilibili-Evolved/preview/dist/bilibili-evolved.preview.user.js`,
  library: {
    lodash: `https://${host}/lodash/lodash/4.17.21/dist/lodash.min.js`,
    protobuf: `https://${host}/protobufjs/protobuf.js/v6.10.1/dist/light/protobuf.min.js`,
    jszip: `https://${host}/Stuk/jszip/v3.7.1/dist/jszip.min.js`,
    sortable: `https://${host}/SortableJS/Sortable/1.14.0/Sortable.min.js`,
    mdi: `https://${owner}.github.io/Bilibili-Evolved/static/mdi/mdi.css`,
    streamsaver: `https://${host}/jimmywarting/StreamSaver.js/2.0.6/StreamSaver.js`,
    // https://github.com/the1812/Bilibili-Evolved/pull/4521#discussion_r1402084486
    ffmpeg: jsDelivr.library.ffmpeg,
  },
  smallLogo: `https://${host}/${owner}/Bilibili-Evolved/preview/images/logo-small.png`,
  logo: `https://${host}/${owner}/Bilibili-Evolved/preview/images/logo.png`,
  root: (branch, ownerOverride) =>
    `https://${host}/${ownerOverride || owner}/Bilibili-Evolved/${branch}/`,
}
