import React, { useEffect, useState } from "react";
import { getAgents, createAgent } from "../api";

function Agents() {
  const [agents, setAgents] = useState([]);
  const [newAgentName, setNewAgentName] = useState("");

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const data = await getAgents();
      setAgents(data);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  const handleAddAgent = async () => {
    try {
      const newAgent = { name: newAgentName, status: "Active" };
      await createAgent(newAgent);
      fetchAgents(); // Refresh the list
      setNewAgentName(""); // Clear input
    } catch (error) {
      console.error("Error adding agent:", error);
    }
  };

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
      <input
        type="text"
        value={newAgentName}
        onChange={(e) => setNewAgentName(e.target.value)}
        placeholder="New Agent Name"
      />
      <button onClick={handleAddAgent}>Add Agent</button>
    </div>
  );
}

export default Agents;
