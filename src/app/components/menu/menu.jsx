import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ToggleLoading from "../../api/toggleLoading.jsx";
import Character from "../../../data/dataDef/character.jsx";
import { save_file, load_file } from "../../api/savefile";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import "./menu.css";

const formStyle = {
  width: "50rem",
  paddingTop: "50px",
};
class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "Male",
      isLoading: true,
    };
    this.genderHandler = this.genderHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  async componentWillMount() {
    var data = await load_file("/api/tempfile");
    if (data) {
      data = JSON.parse(data);
      await Promise.resolve(this.props.saveState(data));
      this.props.history.push("/home");
    } else {
      this.setState(ToggleLoading(this.state));
    }
  }
  async genderHandler(str) {
    this.setState({
      ...this.state,
      gender: str,
    });
  }
  async submitHandler(event) {
    event.preventDefault();
    var name = document.getElementsByName("playerDetail")[0].value;
    var gender = this.state.gender;
    if (name == "") {
      alert("You must type in a valid name!");
      return;
    }
    await Promise.resolve(
      this.props.savePlayer(
        new Character({ ...this.props.main.player, name, gender })
      )
    );
    await save_file(this.props.main, "/api/tempfile");
    this.setState({ ...this.state, isLoading: true });
    setTimeout(() => {
      this.props.history.push("/home");
    }, 200);
  }
  render() {
    return this.state.isLoading ? (
      <div className="container">Loading...Please Wait...</div>
    ) : (
      <div className="container">
        <form onSubmit={this.submitHandler} style={formStyle}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                What is your name?
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              maxLength="10"
              name="playerDetail"
            />
            <InputGroup.Text
              id="inputGroup-sizing-default"
              className="input-group-c"
            >
              What is your gender?
            </InputGroup.Text>
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={this.state.gender}
              id="input-group-dropdown-2"
            >
              <Dropdown.Item onClick={() => this.genderHandler("Male")}>
                Male
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.genderHandler("Female")}>
                Female
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <Button type="submit">Confirm</Button>
        </form>
      </div>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
);
