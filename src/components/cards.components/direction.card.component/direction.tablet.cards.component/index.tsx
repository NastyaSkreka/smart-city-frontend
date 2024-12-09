import { useRef, useState } from "react";
import styled from "styled-components";
import DirectionCardComponent from "..";
import { ReactComponent as UpDownIcon } from "../../../../styles/icons/up-down-arr.svg";

const CardWrapperContainer = styled.div<{ isExpanded: boolean }>`
  overflow: hidden;
  padding: 10px 5px;
  transition: height 0.6s ease, margin-bottom 0.6s ease;
  margin-bottom: ${(props) => (props.isExpanded ? "20px" : "10px")};
`;


const CardContainer = styled.div`
  padding: 50px 0;
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 20px;

  @media (min-width: 744px) {
    display: none;
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr; 
  }
`;

const ShowMoreButton = styled.div`
  font-family: "e-Ukraine", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 122%;
  letter-spacing: -0.04em;
  color: #494a4c;

  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 20px;
  cursor: pointer;

  @media (min-width: 744px) {
    display: none;
  }
`;

const ArrowIcon = styled(UpDownIcon)<{ isRotated: boolean }>`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.isRotated ? "180deg" : "0deg")});
`;

function DirectionTabletCardsComponent({ cards }: any) {
  const [showAll, setShowAll] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState("auto");

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    if (wrapperRef.current) {
      if (!showAll) {
        setWrapperHeight(`${wrapperRef.current.scrollHeight}px`);
      } else {
        setWrapperHeight("300px");
      }
    }

    setShowAll(!showAll);
  };

  return (
    <CardContainer>
      <CardWrapperContainer
        ref={wrapperRef}
        isExpanded={showAll}
        style={{ height: wrapperHeight }}
      >
        <CardWrapper>
          {cards.map((card: any, index: any) => (
            <DirectionCardComponent key={index} slide={card} />
          ))}
        </CardWrapper>
      </CardWrapperContainer>
      <ShowMoreButton onClick={handleShowMore}>
        {showAll ? "приховати напрямки" : "усі напрямки"}
        <ArrowIcon isRotated={showAll} />
      </ShowMoreButton>
    </CardContainer>
  );
}

export default DirectionTabletCardsComponent;
