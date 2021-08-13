function noti(props) {
  return (
    <div className="flex justify align ">
      <div className="flex justify align flex_1 width-100">
        <div className=""></div>
        <div>{props.msg}</div>
      </div>
      <a className="time" href={props.link} target="_blank">
        {props.link ? "see profile." : ""}
      </a>
    </div>
  );
}
export default noti;
