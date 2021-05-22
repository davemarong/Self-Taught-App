import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import {
  get_top_level_index,
  change_subject_type,
} from "../../redux/actions/index";
import Modal from "@material-ui/core/Modal";
import MainSubjectModal from "./modal/MainSubjectModal";
import CreateSubjectModal from "./modal/CreateSubjectModal";
import { motion } from "framer-motion";
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";

import "../../styles/Home.css";

export default function MainSubjects() {
  const dispatch = useDispatch();
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  const [mainSubjectModal, setMainSubjectModal] = useState(false);
  const [createSubjectModal, setCreateSubjectModal] = useState();
  const [renderMainSubject, setRenderMainSubject] = useState("hei");
  const [subjectsType, setSubjectsType] = useState();
  const openMainSubjectModal = () => {
    setMainSubjectModal(true);
  };
  const closeMainSubjectModal = () => {
    setMainSubjectModal(false);
  };
  const openCreateSubjectModal = () => {
    setCreateSubjectModal(true);
  };
  const closeCreateSubjectModal = () => {
    setCreateSubjectModal(false);
  };
  const numberToPercent = (lowNumber, highNumber) => {
    const percent = (lowNumber / highNumber) * 100;
    return Math.trunc(percent);
  };
  return (
    <div>
      <Modal
        open={createSubjectModal}
        onClose={closeCreateSubjectModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={createSubjectModal}>
          <div style={{ maxWidth: 560, margin: "auto" }}>
            <CreateSubjectModal
              subjectsType={subjectsType}
              closeCreateSubjectModal={closeCreateSubjectModal}
            />
          </div>
        </Zoom>
      </Modal>
      <Modal
        open={mainSubjectModal}
        onClose={closeMainSubjectModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom timeout={300} in={mainSubjectModal}>
          <div style={{ maxWidth: 560, margin: "auto", padding: 0 }}>
            <MainSubjectModal
              closeMainSubjectModal={closeMainSubjectModal}
              setRenderMainSubject={setRenderMainSubject}
            />
          </div>
        </Zoom>
      </Modal>
      <Card style={{ marginBottom: 100 }}>
        <CardContent>
          <List>
            <Grid container direction="row" justify="center" spacing={4}>
              {mainSubjects.map((subject, topLevelIndex) => {
                return (
                  <Grid
                    item
                    style={{ cursor: "pointer" }}
                    component={motion.div}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => {
                      dispatch(get_top_level_index(topLevelIndex));
                      dispatch(change_subject_type(mainSubjects));
                      openMainSubjectModal();
                    }}
                  >
                    <Typography variant="h3" align="center">
                      {" "}
                      {numberToPercent(
                        subject[0].learnedSkills,
                        subject[0].totalSkills
                      )}
                      %
                    </Typography>
                    <div
                      style={{
                        width: 200,
                        height: 15,
                        borderRadius: 50,
                        background: "grey",
                        marginBottom: 20,
                        marginTop: 5,
                      }}
                    >
                      <div
                        style={{
                          width: `
                          ${numberToPercent(
                            subject[0].learnedSkills,
                            subject[0].totalSkills
                          )}%`,
                          height: 15,
                          borderRadius: 50,
                          background: "#57ca10",
                        }}
                      ></div>
                    </div>

                    <Card
                      style={{
                        borderRadius: 15,
                        width: 200,
                        height: 110,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        // background:
                        //   "linear-gradient(10deg, #D6543C 10%, #D586F7 60%)",
                        background:
                          "linear-gradient(10deg, #ff5e41 10%, #c445fb 60%)",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h4" align="center">
                          {subject[0].title}
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography variant="body1" align="center">
                      {subject[0].learnedSkills} of {subject[0].totalSkills}{" "}
                      skills learned
                    </Typography>
                  </Grid>
                );
              })}
              <Grid container justify="flex-end" item xs={12}>
                <Button
                  style={{
                    background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
                  }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  variant="outlined"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    setSubjectsType("mainSubjects");
                    openCreateSubjectModal();
                  }}
                >
                  Create new
                </Button>
              </Grid>
            </Grid>
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <List>
            <Grid container direction="row" justify="center" spacing={4}>
              {secondarySubjects.map((subject, topLevelIndex) => {
                return (
                  <Grid
                    item
                    style={{ cursor: "pointer" }}
                    component={motion.div}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => {
                      dispatch(get_top_level_index(topLevelIndex));
                      dispatch(change_subject_type(secondarySubjects));
                      openMainSubjectModal();
                    }}
                  >
                    <Typography variant="h6" align="center">
                      {numberToPercent(
                        subject[0].learnedSkills,
                        subject[0].totalSkills
                      )}
                      %
                    </Typography>

                    <div
                      style={{
                        width: 150,
                        height: 15,
                        borderRadius: 50,
                        background: "grey",
                        marginBottom: 20,
                        marginTop: 5,
                      }}
                    >
                      <div
                        style={{
                          width: `${numberToPercent(
                            subject[0].learnedSkills,
                            subject[0].totalSkills
                          )}%`,
                          height: 15,
                          borderRadius: 50,
                          background: "#57ca10",
                        }}
                      ></div>
                    </div>

                    <Card
                      style={{
                        borderRadius: 15,
                        width: 150,
                        height: 80,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                        // background:
                        //   "linear-gradient(10deg, #D6AD3C 10%, #D586F7 60%)",
                        background:
                          "linear-gradient(10deg, #D6AD3C 10%, #c445fb 60%)",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" align="center">
                          {subject[0].title}
                        </Typography>
                      </CardContent>
                    </Card>
                    <Typography variant="body2" align="center">
                      {subject[0].learnedSkills} of {subject[0].totalSkills}{" "}
                      skills learned
                    </Typography>
                  </Grid>
                );
              })}
              <Grid container justify="flex-end" item xs={12}>
                <Button
                  style={{
                    background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
                  }}
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  variant="outlined"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    setSubjectsType("secondarySubjects");
                    openCreateSubjectModal();
                  }}
                >
                  Create new
                </Button>
              </Grid>
            </Grid>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
