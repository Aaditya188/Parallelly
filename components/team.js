import NotifyList from "./team_list";
function notify() {
  return (
    <div className="notify flex flex-col">
      <NotifyList msg="THE TEAM MEMBERS ARE AS FOLLOWS!" />
      <NotifyList
        msg="Yash Joshi "
        link="https://www.linkedin.com/in/yash-joshi-b4351918b/"
      />
      <NotifyList
        msg="Shivam Singh"
        link="https://www.linkedin.com/in/singhshivam-007/"
      />
      <NotifyList
        msg="Aditya Prakash"
        link="https://www.linkedin.com/in/aaditya-prakash-36650b18b/"
      />
      <NotifyList
        msg="Manas Khare"
        link="https://www.linkedin.com/in/manas-khare-3b377818b/"
      />
      <NotifyList
        msg="Pushp Paritosh"
        link="https://www.linkedin.com/in/pushp-paritosh-14359b181/"
      />
    </div>
  );
}
export default notify;
