export default function VotingListItem(props) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.person.label}
      <span className="badge bg-primary rounded-pill">{props.person.votes}</span>
    </li>
    </>
  );
}
