import React, { useState } from "react";

import { Loading } from "@/components/loading";

export const ChatBI = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <Loading loading={loading} text={"加载中..."}>
      <iframe
        className={"w-full h-screen-minus-44 border-none"}
        frameBorder="0"
        src="https://sharegray.tcbi.qq.com/page/chat-bi-embed?authType=weak&projectId=11029653&token=4f8df711-75bb-4d27-87b9-11117074982f"
        title={"ChatBI"}
        onLoad={onLoad}
      />
    </Loading>
  );
});

ChatBI.displayName = "ChatBI";
