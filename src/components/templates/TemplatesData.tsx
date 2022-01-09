import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SubjectIcon from "@mui/icons-material/Subject";

export const TemplatesData = [
  {
    name: "Complete",
    description:
      "Complete Templates packages for Projects, Main subjects and Secondary subjects",
    icon: <AccountTreeIcon color="primary" style={{ fontSize: 100 }} />,
  },
  {
    name: "Project",
    description: "Templates for all kinds of different projects",
    icon: <ListAltIcon color="success" style={{ fontSize: 100 }} />,
  },
  {
    name: "Main Subjects",
    description: "Templates for the most popular Main Subjects",
    icon: <SubjectIcon color="secondary" style={{ fontSize: 100 }} />,
  },
  {
    name: "Secondary Subjects",
    description: "Templates for the most used Secondary subjects",
    icon: <SubjectIcon color="secondary" style={{ fontSize: 100 }} />,
  },
];
