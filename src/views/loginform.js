import React from "react";
import "../views/form.css";
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
export class Login extends React.Component {
  render() {
    return (
      <>
        <div className="formDecoration">
          <Card className="cardDesign">
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
                <span>
                  Not a member?{" "}
                  <Link
                    color="black"
                    href="/giaic/apply"
                    onClick={() => {
                      this.props.history.push("/giaic/apply");
                    }}
                  >
                    Sign up
                  </Link>
                </span>
                <br />
                <Button type="submit" style={{ border: "1px solid green" }}>
                  Login
                </Button>
              </div>
            </MaterialUIForm>
          </Card>
        </div>
      </>
    );
  }
}
