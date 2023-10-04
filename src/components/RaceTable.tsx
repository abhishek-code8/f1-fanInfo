import React from 'react';
import { Race } from '../constants/types'; // Import the Race interface
import './RaceTable.css';

interface RaceTableProps {
  races: Race[]; // Array of race data
}

const RaceTable: React.FC<RaceTableProps> = ({ races }) => {
  return (
    <div className="race-table-container">
    <table className="race-table">
      <thead>
        <tr>
          <th>Race ID</th>
          <th>Name</th>
          <th>Country</th>
          <th>Status</th>
          <th>Season</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Track</th>
        </tr>
      </thead>
      <tbody>
        {races.map((race) => (
          <tr key={race.race_id}>
            <td>{race.race_id}</td>
            <td>{race.name}</td>
            <td>{race.country}</td>
            <td>{race.status}</td>
            <td>{race.season}</td>
            <td>{race.start_date}</td>
            <td>{race.end_date}</td>
            <td>{race.track}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default RaceTable;
