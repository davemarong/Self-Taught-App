import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector } from "react-redux";
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
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import { motion, useCycle } from "framer-motion";
import Zoom from "@material-ui/core/Zoom";

export default function MainSubjectModal({
  setRenderMainSubject,
  closeMainSubjectModal,
}) {
  const { handleFilterRemoveOneItem } = useRemoveTopics();
  const { handleToggleLearnedSkill } = useLearnTopics();
  const { update_Title_LearnedSkills_TotalSkills } = useUpdateSubjectInfo();

  const { setRender } = useAddTopics();
  const topLevelIndex = useSelector((state) => state.topLevelIndex);
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const subjectType = useSelector((state) => state.subjectType);
  const [addTopicModal, setAddTopicModal] = useState(false);
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const openAddTopicModal = () => {
    setAddTopicModal(true);
  };
  const closeAddTopicModal = () => {
    setAddTopicModal(false);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 70 }}>
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
      <Card style={{ maxHeight: 500 }}>
        <Grid container direction="row">
          <Grid container justify="flex-end" item xs={12}>
            <IconButton onClick={closeMainSubjectModal}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h3"
              style={{ position: "relative", bottom: 10 }}
            >
              {subjectType[topLevelIndex][0].title}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TableContainer style={{ height: 400, overflowY: "auto" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>Topic</TableCell>
                    <TableCell style={{ padding: 0, fontWeight: "bold" }}>
                      Learned
                    </TableCell>
                    <TableCell style={{ padding: 0 }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subjectType[topLevelIndex][1].map((item, lowLevelIndex) => (
                    <TableRow key={item.title}>
                      <TableCell component="th" scope="row">
                        {item.title}
                      </TableCell>
                      <TableCell
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
                        {item.learned ? (
                          <Checkbox checked={true} />
                        ) : (
                          <Checkbox checked={false} />
                        )}
                      </TableCell>
                      <TableCell
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
          <Grid container justify="flex-end" item xs={6}>
            <Grid item>
              <IconButton
                onClick={() => {
                  openAddTopicModal();
                }}
              >
                <AddCircleOutlineIcon />
              </IconButton>

              <IconButton
                style={showDeleteOption ? { background: "#9e9e9eb0" } : null}
                onClick={() => {
                  setShowDeleteOption(!showDeleteOption);
                }}
              >
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid container item xs={12} spacing={0}>
              <Grid
                container
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
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
