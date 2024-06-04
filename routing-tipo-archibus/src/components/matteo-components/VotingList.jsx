import { useState } from "react";
import VotingListHandler from "./VotingListHandler";
import VotingListItem from "./VotingListItem";

export default function VotingList() {
  const [votingList, setVotingList] = useState([]);

  const handleAddRow = (newRow) => {
    let added = false;
    const newList = []; 
    for (let i=0; i<votingList.length;i++) {
      if (votingList[i].label === newRow.label) {
        votingList[i].votes ++;
        added = true;
      } 
      newList.push(votingList[i])
    }
    if (!added) {
      newList.push(newRow)
    }

    setVotingList(newList);
  };

  const handleRemoveRow = (label) => {
    const newList = []; 
    for (let i=0; i<votingList.length;i++) {
      if (votingList[i].label === label) {
        votingList[i].votes --;
      } 

      if (votingList[i].votes!=0) newList.push(votingList[i])
      
    }

    setVotingList(newList);
  };


  return (
    <>
        <VotingListHandler handleAddRow={handleAddRow} handleRemoveRow={handleRemoveRow}></VotingListHandler>
        <ul className="list-group">
        {votingList.map((person) => (
          <VotingListItem
            person={person}
          ></VotingListItem>
        ))}
      </ul>
    </>
  );
}
