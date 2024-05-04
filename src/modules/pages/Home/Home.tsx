import React from "react";

import CategoryHolder from "../../core/design-system/CategoryHolder.tsx";
import VideoCard from "../../Videos/VideoCard.tsx";

import someVideo from "../../../fakeData/someVideo.ts";

export default function Home() {
  return <div>
    Im the home page
    <CategoryHolder title='Recents'>
      <VideoCard video={someVideo()} />
      <VideoCard video={someVideo()} />
      <VideoCard video={someVideo()} />
    </CategoryHolder>
    <CategoryHolder title='Hot'>
      <VideoCard video={someVideo()} />
      <VideoCard video={someVideo()} />
      <VideoCard video={someVideo()} />
    </CategoryHolder>
  </div>
}