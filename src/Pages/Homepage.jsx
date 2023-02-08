import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";

const Homepage = () => {
  return (
    <div>
      <HomePageWrapper>
        <FilterSortWrapper>

          <FilterSort />  

        </FilterSortWrapper>
        <MusicRecorderWrapper>

          <MusicRecords />

        </MusicRecorderWrapper>
      </HomePageWrapper>
    </div>
  );
};

export default Homepage;

const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh;

  
`;
const FilterSortWrapper = styled.div`
  position: fixed;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(31, 30, 30, 0.3) 0px 18px 36px -18px inset;
  height: 100vh;
  width: 200px;
  margin-left: 5px;
  border-radius: 20px;
  border: 5px solid whitesmoke;
`;

const MusicRecorderWrapper = styled.div`
  width: 80%;
   margin-left: 250px;
   overflow: scroll;
   overflow-x: hidden;
   overflow-y: auto;
  
  /* border: 4px solid black; */
  display:grid;
  grid-template-columns : repeat(auto-fit,minmax(300px,max-content));
  justify-content : center;
  gap : 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-radius: 20px;
`;
