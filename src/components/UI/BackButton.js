import { useHistory } from "react-router-dom";

export default function BackButton() {
  let history = useHistory();
  return <button className="back" onClick={() => history.goBack()}>X</button>;
}
