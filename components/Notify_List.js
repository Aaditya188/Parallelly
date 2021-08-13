function notification(props) {
  return (
    <div className="flex justify align ">
      <div className="flex justify align flex_1 width-100">
        <div className="notify_avatar"></div>
        <div>{props.msg}</div>
      </div>
      <div className="time">{props.time}</div>
    </div>
  );
}
export default notification;
