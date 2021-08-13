import NotifyList from "./Notify_List";
import DATA from "../../src/Data/demo_post_data";
import { useState } from "react";

function notify() {
  const [list, updateList] = useState(DATA[0].notify_data);
  return (
    <div className="notify flex flex-col">
      {list.map((user) => (
        <NotifyList msg={user.msg} time={user.time} />
      ))}
    </div>
  );
}
export default notify;
