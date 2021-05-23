import React, { useRef, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import introductionData from "./IntroductionData";

import mainSubjectVideo from "../../assets/MainSubjects.mp4";
import sideSubjectVideo from "../../assets/sideSubjects.mp4";
import topicsVideo from "../../assets/TopicsBig.mp4";
import createSubjectVideo from "../../assets/CreateMainSubject.mp4";
import editSubjectVideo from "../../assets/EditSubject.mp4";
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
}));

export default function Introduction() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = introductionData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const restartVideo = () => {
    videoRefs[activeStep].ref.current.currentTime = 0;
    videoRefs[activeStep].ref.current.play();
  };
  const videoPlay = useRef(null);
  const videoPlay1 = useRef(null);
  const videoPlay2 = useRef(null);
  const videoPlay3 = useRef(null);
  const videoPlay4 = useRef(null);
  const videoRefs = [
    { ref: videoPlay },
    { ref: videoPlay1 },
    { ref: videoPlay2 },
    { ref: videoPlay3 },
    { ref: videoPlay4 },
  ];
  useEffect(() => {
    restartVideo();
  }, []);
  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{introductionData[activeStep].title}</Typography>
        <Typography>{introductionData[activeStep].description}</Typography>
      </Paper>

      <BindKeyboardSwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        onTransitionEnd={restartVideo}
      >
        <video ref={videoPlay} controls loop className={classes.img}>
          <source src={mainSubjectVideo} type="video/mp4" />
        </video>
        <video ref={videoPlay1} controls loop className={classes.img}>
          <source src={sideSubjectVideo} type="video/mp4" />
        </video>
        <video ref={videoPlay2} controls loop className={classes.img}>
          <source src={topicsVideo} type="video/mp4" />
        </video>
        <video ref={videoPlay3} controls loop className={classes.img}>
          <source src={createSubjectVideo} type="video/mp4" />
        </video>
        <video ref={videoPlay4} controls loop className={classes.img}>
          <source src={editSubjectVideo} type="video/mp4" />
        </video>
      </BindKeyboardSwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
