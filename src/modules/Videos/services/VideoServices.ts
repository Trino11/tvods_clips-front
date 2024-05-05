import { VideoModel } from "../models/VideoModel";

import someVideo from "../../../fakeData/someVideo.ts";

function getRecentVideos(): VideoModel[] {
  return [someVideo(), someVideo(), someVideo(), someVideo()];
}

function getTopVideos(): VideoModel[] {
  return [someVideo(), someVideo(), someVideo()];
}

export { getTopVideos, getRecentVideos }