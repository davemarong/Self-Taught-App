import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { get_user_profile_data } from "../../redux/actions/index";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Register() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let history = useHistory();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    if (username.length > 3 && email.length > 10 && password.length > 3) {
      setLoading(true);

      axios
        .post("https://self-taught-web-dev.herokuapp.com/auth/local/register", {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log("Register successful");
          dispatch(get_user_profile_data(response.data.user));
          localStorage.setItem("jwt", response.data.jwt);
          setLoading(false);

          history.push("/login");
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
          setLoading(false);
        });
    }
  };
  return (
    <div>
      <Container>
        <Grid container direction="column">
          <Grid item>
            <Typography>Sign up</Typography>
          </Grid>

          <Grid item>
            <Typography>Please enter your personal info</Typography>
          </Grid>
          <Grid container item direction="column">
            <Grid item>
              <TextField
                onChange={handleUsername}
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                name="username"
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                onChange={handleEmail}
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                onChange={handlePassword}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                label="Re enter password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="reEnterPassword"
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                onClick={handleSignUp}
                variant="outlined"
                fullWidth
                size="large"
              >
                Sign up
              </Button>
            </Grid>
            <Grid container item>
              <Grid item>
                <Button variant="outlined">Sign in</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Sign up</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {loading ? <CircularProgress /> : null}
      </Container>
    </div>
  );
}
