import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap-buttons";

export default function ErrorPage({ onRedirect }) {
  let history = useHistory();

  const HomeButton = () => {
    function handleClick() {
      history.push("/");
    }
    return (
      <Button
        type="button"
        className="btn btn-secondary fw-light"
        aria-label="search button"
        onClick={handleClick}
      >
        Home
      </Button>
    );
  };

  return (
    <div>
      <br />
      <h1 className="display-6">
        Looks like no one has uploaded music for this country yet 🥺, check back
        later!
      </h1>
      <HomeButton></HomeButton>
    </div>
  );
}
