import React from "react";
import MaterialUIForm from "react-material-ui-form";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Card,
  CardContent,
  Link
} from "@material-ui/core";
import "./form.css";

export class RegistorForm extends React.Component {
  render() {
    return (
      <div className="formDecoration">
        <Card className="cardDesign" >
          <MaterialUIForm onSubmit={this.submit}>
            <CardContent
              style={{
                width: "100%",
                backgroundImage:
                  " -webkit-linear-gradient(right,#08d88d,#0eb5a3)"
              }}
            >
              {" "}
              <Typography
                variant="span"
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginTop: "15px"
                }}
              >
                Admission Form
              </Typography>{" "}
            </CardContent>
            <div className="logoWork">
              <img
                style={{ marginTop: "2px", height: "120px" }}
                src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
              />
              <p style={{ color: "#017969", lineHeight: "1.25" }}>
                Presidential Initiative for <br /> Artificial Intelligence and
                Computing
              </p>
            </div>

            {/* <TextField
              label="Student Name"
              variant="outlined"
              type="text"
              name="firstname"
              value=""
              data-validators="isRequired,isAlpha"
              onChange={this.handleChange}
            /> */}

            {/* <TextField
                label="Father Name"
                type="text"
                name="name"
                value=""
                data-validators="isRequired,isAlpha"
                onChange={this.handleChange}
              /> */}

            <h1>
              {" "}
              <TextField
                variant="outlined"
                label="CNIC"
                type="number"
                name="cnic"
                value=""
                data-validators="isRequired"
                onChange={this.handleChange}
              />
            </h1>
            <h1>
              {" "}
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                value=""
                data-validators="isRequired,isEmail"
                onChange={this.handleChange}
              />
            </h1>
            <h1>
              {" "}
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                value=""
                data-validators="isRequired"
                onChange={this.handleChange}
              />
            </h1>

            {/* <TextField
              label="Phone#"
              type="number"
              name="phone#"
              value=""
              data-validators="isRequired,isnum"
              onChange={this.handleChange}
            /> */}

            {/* 
            <TextField
              style={{ width: "34%" }}
              id="date"
              label="Date Of Birth-"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true
              }}
            /> */}

            {/* <h1>
            {" "}
            <FormControl required style={{ width: "13%" }}>
              <InputLabel>Age</InputLabel>
              <Select value="" name="age">
                <MenuItem value="">
                  <em>Please select your age ...</em>
                </MenuItem>
                <MenuItem value={10}>Teens</MenuItem>
                <MenuItem value={20}>Twenties</MenuItem>
                <MenuItem value={30}>Thirties</MenuItem>
                <MenuItem value="40+">Fourties +</MenuItem>
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
          </h1> */}
            {/* <h1>
              {" "}
              <FormControl style={{ width: "25%" }}>
                <InputLabel>Choose your Subject</InputLabel>
                <Select value="" name="Subject">
                  <MenuItem value="">
                    <em>Available Programs...</em>
                  </MenuItem>
                  <MenuItem value={10}>Artificial Inteligence</MenuItem>
                  <MenuItem value={20}>Cloud Native</MenuItem>
                  <MenuItem value={30}>Blockchain</MenuItem>
                  <MenuItem value="40+">Internet Of Things</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>
            </h1>

            <h1>
              {" "}
              <FormControl>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="gender"
                  value="male"
                  style={{ display: "block" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />

                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </h1> */}
            <span>
              Already a member??{" "}
              <Link
                color="black"
                href="/login"
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Login
              </Link>
            </span>
            <br />
            <Button type="submit" style={{  border: "1px solid green"}}>Submit</Button>

            {/* <Button variant="raised" type="reset">
              Reset
            </Button>
            <Button variant="raised" type="submit">
              Submit
            </Button> */}
          </MaterialUIForm>
        </Card>
      </div>
    );
  }
}
