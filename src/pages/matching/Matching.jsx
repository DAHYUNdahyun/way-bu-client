import Menubar1 from "./components/Menubar1";
import MainContent from "./components/MainContent";
import MatchingOptions from "./components/MatchingOptions";
import ExploreMatchesBar from "./components/ExploreMatchesBar";
import Calendar from "./components/Calendar";
import styled from "styled-components";
import MatchingGroup from "./components/MatchingGroup";


const MatchingRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-13xl);
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--xl-bold-size);
  color: #2376f2;
  font-family: var(--font-noto-sans-kr);
`;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const ExploreMatchesBarWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20%;
`;

const Matching = () => {
  return (
    <MatchingRoot>
      <Menubar1 />
      <MainContent />
      <MatchingOptions />
      <Wrapper>
        <Calendar />
        <ExploreMatchesBar />
        <ExploreMatchesBarWrapper> 
          <MatchingGroup />
        </ExploreMatchesBarWrapper>
      </Wrapper>
    </MatchingRoot>
  );
};

export default Matching;