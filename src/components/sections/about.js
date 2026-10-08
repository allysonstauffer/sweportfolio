import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 1fr;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'TypeScript', 'React / React Native', 'Java', 'SQL / PostgreSQL', 'BigQuery'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I’m a computer science student at California Polytechnic State University, San Luis
              Obispo, with a minor in mathematics and an expected graduation date of May 2028. I
              like building software where systems, data, and machine learning meet.
            </p>

            <p>
              At Cal Poly’s Noyce School, I’m the primary student software engineer on an
              infrastructure monitoring and data visualization platform for the university’s
              NVIDIA AI Factory. Before that, I built data pipelines and operational tools at
              Kestrix, and contributed to Mustang Maps, a campus navigation app used by Cal Poly
              students.
            </p>

            <p>
              I’ve also worked on human-computer interaction research and joined Apple’s inaugural
              Next-Gen Innovators program, where I built tools to evaluate image detector
              reliability. Away from work, I’m building LociLens, a field-documentation platform
              for engineering teams.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

      </div>
    </StyledAboutSection>
  );
};

export default About;
