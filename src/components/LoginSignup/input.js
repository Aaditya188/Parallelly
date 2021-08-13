function Input(props) {
  return (
    <div id="float-label">
      <label htmlFor="email">{props.purpose}</label>
      <input type="email" />
    </div>
  );
}
export default Input;
