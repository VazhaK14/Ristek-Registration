import axios from "axios";

export interface Tryout {
  title: string;
  time: number;
  question: number;
  date_start: string;
  date_created: string;
}

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const getTryoutById = async (id: number) => {
  try {
    const response = await api.get(`get-tryout/${id}`); // Remove ${api}
    return response.data;
  } catch (error) {
    console.error("Error fetching tryout: ", error);
    return null;
  }
};

export const getTryoutByTitle = async (title: string) => {
  try {
    const response = await api.get(
      `get-by-title?title=${encodeURIComponent(title)}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tryout by title:", error);
    return null;
  }
};

export const createTryout = async (id: number, tryoutData: Tryout) => {
  try {
    const response = await api.post<Tryout>(`create-tryout/${id}`, tryoutData);
    return response.data;
  } catch (error) {
    console.error("Error creating tryout:", error);
    return null;
  }
};
