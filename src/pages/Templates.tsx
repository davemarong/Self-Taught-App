// Import

// React
import React from "react";

// Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

// Components
import { TemplatesContainer } from "../components/templates/TemplatesContainer";
import { ProjectTemplatesCard } from "../components/templates/projectTemplates/ProjectTemplatesCard";
import { SubjectsTemplatesCard } from "../components/templates/subjectsTemplates/SubjectsTemplatesCard";
import { TemplatesCard } from "../components/templates/TemplatesCard";
import useScrollToTop from "../components/customHooks/useScrollToTop";
import TransparentButton from "../components/button/TransparentButton";

// Icon
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

// Data
import { TemplatesData } from "../components/templates/TemplatesData";

const useStyles = makeStyles({
  full: {
    paddingLeft: 270,
    paddingRight: 20,
  },
  mobile: {
    padding: 20,
  },
});

// TYPE

type TemplatesCardProps = {
  name: string;
  description: string;
  icon: any;
};

export const Templates = () => {
  // Custom hook
  useScrollToTop();

  // Styles
  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();

  // Return
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <TemplatesContainer>
        {TemplatesData.map((item) => (
          <TemplatesCard
            name={item.name}
            description={item.description}
            icon={item.icon}
          >
            <TransparentButton func={null} icon={<OpenInNewRoundedIcon />}>
              Open
            </TransparentButton>
          </TemplatesCard>
        ))}
      </TemplatesContainer>
    </div>
  );
};
