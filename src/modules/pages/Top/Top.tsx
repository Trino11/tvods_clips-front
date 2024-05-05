import React from "react";

import CategoryHolder from "../../core/design-system/CategoryHolder.tsx";

import { getTopVideos } from "../../Videos/services/VideoServices.ts";

export default function Top() {
  const recentVideos = [];
  return <div>
    <CategoryHolder title='Top' route="top" type="vertical" videos={getTopVideos} />
  </div>
}