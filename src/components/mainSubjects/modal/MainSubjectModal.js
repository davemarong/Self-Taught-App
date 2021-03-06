import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import { useDispatch, useSelector } from "react-redux";
import {
  change_main_subjects,
  change_secondary_subjects,
  get_top_level_index,
  change_subject_type,
} from "../../../redux/actions/index";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AddTopicModal from "./AddTopicModal";
import Checkbox from "@material-ui/core/Checkbox";
import useRemoveTopics from "../../customHooks/useRemoveTopics";
import useLearnTopics from "../../customHooks/useLearnTopics";
import useAddTopics from "../../customHooks/useAddTopics";
import useUpdateSubjectInfo from "../../customHooks/useUpdateSubjectInfo";
import usePushDataToServer from "../../customHooks/usePushDataToServer";

import useSortTopics from "../../customHooks/useSortTopics";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import { motion, useCycle } from "framer-motion";
import Zoom from "@material-ui/core/Zoom";

export default function MainSubjectModal({
  setRenderMainSubject,
  closeMainSubjectModal,
  mainSubjectModal,
}) {
  const { handleFilterRemoveOneItem } = useRemoveTopics();
  const { handleToggleLearnedSkill } = useLearnTopics();
  const { update_Title_LearnedSkills_TotalSkills } = useUpdateSubjectInfo();
  const { handleSortTopicsByName } = useSortTopics();
  const { setRender, addTopicSnackbar } = useAddTopics();
  const { updateMainSubjectsInServer, updateSecondarySubjectsInServer } =
    usePushDataToServer();
  const { index, subject } = mainSubjectModal;

  const dispatch = useDispatch();

  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);

  const subjectType = useSelector((state) => state.subjectType);

  const [addTopicModal, setAddTopicModal] = useState(false);
  const [showDeleteOption, setShowDeleteOption] = useState(false);

  const openAddTopicModal = () => {
    setAddTopicModal(true);
  };
  const closeAddTopicModal = () => {
    setAddTopicModal(false);
  };

  const handleChangeSubjectTitle = (event) => {
    if (subject === "mainsubject") {
      mainSubjects[index][0].title = event.target.value;
      dispatch(change_main_subjects(mainSubjects));
    } else if (subject === "secondarysubject") {
      secondarySubjects[index][0].title = event.target.value;
      dispatch(change_secondary_subjects(secondarySubjects));
    }
  };
  return (
    <Container maxWidth="lg" style={{ marginTop: 70, maxWidth: 1100 }}>
      <Modal open={addTopicModal} onClose={closeAddTopicModal}>
        <Zoom timeout={300} in={addTopicModal}>
          <div>
            <AddTopicModal
              closeAddTopicModal={closeAddTopicModal}
              setRenderMainSubject={setRenderMainSubject}
            />
          </div>
        </Zoom>
      </Modal>
      <Card style={{ height: 600, overflowY: "auto" }}>
        <Grid container direction="row" style={{ minHeight: 600 }}>
          <Grid container justify="flex-end" item xs={12}>
            <IconButton onClick={closeMainSubjectModal}>
              <CloseIcon title="Close window" />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <input
              onChange={handleChangeSubjectTitle}
              defaultValue={subjectType[topLevelIndex][0].title}
              style={{
                fontSize: 48,
                border: 0,
                textAlign: "center",
                width: "100%",
              }}
            />
          </Grid>
          <Grid container justify="flex-end" item xs={12} sm={6}>
            <Grid item xs={12} style={{ maxHeight: 100 }}>
              <IconButton
                title="Add topics"
                onClick={() => {
                  openAddTopicModal();
                }}
              >
                <AddCircleOutlineIcon />
              </IconButton>
              <IconButton
                title="Edit"
                style={showDeleteOption ? { background: "#9e9e9eb0" } : null}
                onClick={() => {
                  setShowDeleteOption(!showDeleteOption);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                title="Sort topics alphabetically"
                onClick={() => {
                  const sortedTopicsList = handleSortTopicsByName(
                    index,
                    subject
                  );
                  if (subject === "mainsubject") {
                    updateMainSubjectsInServer(mainSubjects);
                  } else if (subject === "secondarysubject") {
                    updateSecondarySubjectsInServer(secondarySubjects);
                  }
                  setRender("ren");
                }}
              >
                <SortByAlphaRoundedIcon />
              </IconButton>
            </Grid>
            <Grid container item xs={12} spacing={0} style={{ marginTop: 0 }}>
              <Grid
                container
                direction="column"
                style={{ position: "relative", bottom: 30 }}
              >
                <Typography variant="h6" align="center">
                  Total Topics <br />
                </Typography>
                <Typography variant="h3" align="center">
                  {subjectType[topLevelIndex][0].totalSkills}
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="column"
                style={{ position: "relative", bottom: 30 }}
              >
                <Typography variant="h6" align="center">
                  Total learned <br />{" "}
                </Typography>
                <Typography variant="h3" align="center">
                  {subjectType[topLevelIndex][0].learnedSkills}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TableContainer
              style={{
                height: 400,
                overflowY: "auto",
                paddingRight: 10,
                border: "1px solid #ebebeb",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold", fontSize: 20 }}>
                      Topic
                    </TableCell>
                    <TableCell>
                      <Typography
                        align="center"
                        style={{
                          padding: 0,
                          fontWeight: "bolder",
                          fontSize: 20,
                        }}
                      >
                        Learned
                      </Typography>
                    </TableCell>
                    <TableCell style={{ padding: 0 }}>
                      {showDeleteOption ? (
                        <Typography
                          align="center"
                          style={{
                            padding: 0,
                            fontSize: 20,
                            fontWeight: "bolder",
                          }}
                        >
                          Delete
                        </Typography>
                      ) : null}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subjectType[topLevelIndex][1].map((item, lowLevelIndex) => (
                    <TableRow key={item.title}>
                      <TableCell
                        style={{ maxWidth: 115, overflowX: "auto" }}
                        component="th"
                        scope="row"
                      >
                        {item.title}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ width: 10, padding: 0 }}
                        onClick={() => {
                          handleToggleLearnedSkill(
                            topLevelIndex,
                            item.title,
                            lowLevelIndex,
                            subjectType
                          );
                          setRender(Math.floor(Math.random() * 100));
                        }}
                      >
                        <Checkbox checked={item.learned} />
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ padding: 0 }}
                        onClick={() => {
                          handleFilterRemoveOneItem(
                            topLevelIndex,
                            item.title,
                            subjectType
                          );
                          update_Title_LearnedSkills_TotalSkills(
                            topLevelIndex,
                            subjectType
                          );
                          setRenderMainSubject(item.title);
                        }}
                      >
                        {showDeleteOption ? (
                          <IconButton>
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
