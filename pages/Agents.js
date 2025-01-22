import React, { useState } from "react";

function Agents() {
  const [agents, setAgents] = useState([
    { id: 1, name: "Agent Alpha", status: "Active" },
    { id: 2, name: "Agent Beta", status: "Inactive" },
  ]);

  return (
    <div className="agents">
      <h2>Agents</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            {agent.name} - {agent.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agents;

