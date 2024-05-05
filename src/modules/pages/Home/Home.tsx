import React from "react";

import CategoryHolder from "../../core/design-system/CategoryHolder.tsx";
import VideoCard from "../../Videos/components/VideoCard.tsx";

import { getRecentVideos, getTopVideos } from "../../Videos/services/VideoServices.ts";

export default function Home() {

  return <div>
    <CategoryHolder title='Recents' route="recents" videos={getRecentVideos} />
    <CategoryHolder title='Top' route="top" videos={getTopVideos} />
  </div>
}