import React from "react";

import CategoryHolder from "../../core/design-system/CategoryHolder.tsx";

import { getRecentVideos } from "../../Videos/services/VideoServices.ts";

export default function Recents() {
  const recentVideos = [];
  return <div>
    <CategoryHolder title='Recents' route="recents" type="vertical" videos={getRecentVideos} />
  </div>
}