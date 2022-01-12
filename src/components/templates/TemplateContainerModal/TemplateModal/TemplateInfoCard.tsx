// Import

// React
import React, { ReactNode } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

// Icon
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GreenButton from "../../../button/GreenButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

// Redux
import { useDispatch } from "react-redux";
import {
  change_main_subjects,
  change_secondary_subjects,
} from "../../../../redux/actions";

// Custom hooks
import usePushDataToServer from "../../../customHooks/usePushDataToServer";
import useAddTopics from "../../../customHooks/useAddTopics";
// TYPE
type Props = {
  children: ReactNode;
  toggleModal: () => void;
  title: string;
  level: string;
  icon: any;
  summary: string;
  description: string;
  subjectsAndTopics: (
    | string
    | (
        | {
            title: string;
            totalSkills: number;
            learnedSkills: number;
          }
        | {
            title: string;
            learned: boolean;
          }[]
      )[][]
  )[][];
};

export const TemplateInfoCard = (props: Props) => {
  // Props
  const { children, toggleModal, icon, level, description, subjectsAndTopics } =
    props;

  // Redux
  const dispatch = useDispatch();

  // Custom hooks
  const { updateMainSubjectsInServer, updateSecondarySubjectsInServer } =
    usePushDataToServer();
  const { addTopicSnackbar } = useAddTopics();
  // Functions
  const activateTemplate = (templates: Props["subjectsAndTopics"]) => {
    templates.map((template: any) => {
      if (template[0] === "Main subjects") {
        dispatch(change_main_subjects(template[1]));
        updateMainSubjectsInServer(template[1]);
      } else if (template[0] === "Secondary subjects") {
        dispatch(change_secondary_subjects(template[1]));
        updateSecondarySubjectsInServer(template[1]);
      }
    });
    toggleModal();
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 70 }}>
      <Card style={{ padding: 20, height: 600, overflowY: "auto" }}>
        <Grid
          style={{ minHeight: 600, overflowY: "auto" }}
          container
          direction="column"
          wrap="nowrap"
          justify="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <Grid container justify="flex-end">
            <IconButton>
              <CloseRoundedIcon onClick={toggleModal} />
            </IconButton>
          </Grid>
          <Typography variant="h4">{level}</Typography>
          {icon}
          <Grid item>
            <Typography align="center" style={{ maxWidth: 700 }}>
              {description}
            </Typography>
          </Grid>
          {children}
          <GreenButton
            func={() => {
              activateTemplate(subjectsAndTopics);
            }}
            icon={<AddCircleOutlineRoundedIcon fontSize="large" />}
          >
            Activate template
          </GreenButton>
        </Grid>
      </Card>
    </Container>
  );
};
