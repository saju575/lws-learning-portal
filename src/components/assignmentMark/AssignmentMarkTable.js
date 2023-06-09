import React from "react";
import TableRow from "./TableRow";

const AssignmentMarkTable = ({ assignmentMarks }) => {
  return (
    <div className="element-with-scrollbar overflow-x-auto mt-4">
      <table className="divide-y-1 text-base divide-gray-600 w-full">
        <thead>
          <tr>
            <th className="table-th">Assignment</th>
            <th className="table-th">Date</th>
            <th className="table-th">Student Name</th>
            <th className="table-th">Repo Link</th>
            <th className="table-th">Mark</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-600/50">
          {/* table row  */}
          {assignmentMarks.map((a) => (
            <TableRow key={a.id} assignmentMark={a} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentMarkTable;
