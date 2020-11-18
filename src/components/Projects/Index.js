import React from 'react';

import imge1 from '../../images/svg-5.svg';
import imge2 from '../../images/svg-4.svg';
import imge3 from '../../images/svg-6.svg';
import imge4 from '../../images/svg-1.svg';
import imge5 from '../../images/svg-3.svg';
import imge6 from '../../images/svg-2.svg';

import {
  ProjectCard,
  ProjectContainer,
  ProjectH1,
  ProjectH2,
  ProjectIcon,
  ProjectWrapper,
  ProjectP,
} from './ProjectElements';

const Projects = () => {
  return (
    <ProjectContainer id='projects'>
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={imge1} />
          <ProjectP>
            <ProjectH2>TODO</ProjectH2>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={imge2} />
          <ProjectP>
            <ProjectH2>Cocktail</ProjectH2>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={imge3} />
          <ProjectP>
            <ProjectH2>Color Picker</ProjectH2>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={imge4} />
          <ProjectP>
            <ProjectH2>TODO</ProjectH2>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={imge5} />
          <ProjectP>
            <ProjectH2>TODO</ProjectH2>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={imge6} />
          <ProjectP>
            <ProjectH2>TODO</ProjectH2>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
