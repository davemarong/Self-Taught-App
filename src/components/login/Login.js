import React, { useState, useRef } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { get_user_profile_data, sign_in } from "../../redux/actions/index";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";
import Checkbox from "@material-ui/core/Checkbox";
import useAddTopics from "../customHooks/useAddTopics";
import {
  change_main_subjects,
  change_secondary_subjects,
} from "../../redux/actions/index";
export default function Login() {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { handlePushInfoToRedux } = useAddTopics();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    setLoading(true);
    axios
      .post("https://self-taught-web-dev.herokuapp.com/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        console.log("Logged in", response.data.user);
        console.log(response.data.user.mainSubjects);
        localStorage.setItem("jwt", response.data.jwt);
        dispatch(get_user_profile_data(response.data.user));
        dispatch(sign_in(true));
        dispatch(change_main_subjects(response.data.user.mainSubjects));
        dispatch(
          change_secondary_subjects(response.data.user.secondarySubjects)
        );
        setLoading(false);
        enqueueSnackbar(`Login successful`, {
          variant: "success",
          autoHideDuration: 4000,
        });
        history.push("/home");
      })
      .catch((error) => {
        console.log(
          "An error occurred:",
          error.response.data.data[0].messages[0].message
        );
        setLoading(false);
        enqueueSnackbar(`${error.response.data.data[0].messages[0].message}`, {
          variant: "error",
          autoHideDuration: 4000,
        });
      });
  };
  const passwordField = useRef();
  const togglePassword = () => {
    if (passwordField.current.type === "text") {
      passwordField.current.type = "password";
    } else if (passwordField.current.type === "password") {
      passwordField.current.type = "text";
    }
  };
  return (
    <div>
      <Container
        maxWidth="sm"
        style={{
          border: "1px solid grey",
          borderRadius: 10,
          padding: 20,
          boxShadow: "0 0 4px",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h3" align="center">
              Log in
            </Typography>
          </Grid>
          <Grid container item direction="column">
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
                inputRef={passwordField}
                onChange={handlePassword}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                type="password"
              ></TextField>
            </Grid>
            <Grid container alignItems="center" item>
              <Typography>Show password</Typography>
              <Checkbox onChange={togglePassword} />
            </Grid>
            <Grid item>
              <Button
                onClick={handleSignIn}
                variant="outlined"
                fullWidth
                size="large"
              >
                Sign in
              </Button>
            </Grid>
            {/* <Grid container item>
              <Grid item>
                <Button variant="outlined">Log in</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Register</Button>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid container justify="center" item>
          {loading ? <CircularProgress /> : null}
        </Grid>
      </Container>
    </div>
  );
}
