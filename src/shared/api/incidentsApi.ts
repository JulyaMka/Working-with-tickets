import { incidentsMock } from "../mocks/incidents";
import { Incident } from "../../entities/incident";

export const incidentsApi = {
  getIncidents(): Promise<Incident[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(incidentsMock);
      }, 600);
    });
  },
};
