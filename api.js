import axios from "axios";

// Base URL for the backend
const BASE_URL = "https://ai-assistant-bot-vm.vercel.app/";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// Fetch all agents
export const getAgents = async () => {
  try {
    const response = await api.get("/agents");
    return response.data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};

// Create a new agent
export const createAgent = async (agentData) => {
  try {
    const response = await api.post("/agents", agentData);
    return response.data;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};

// Add other API methods as needed
