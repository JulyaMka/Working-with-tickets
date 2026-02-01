import { hotTicketsMock } from "../mocks/alerts";

export const fetchHotTickets = (): Promise<number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const shuffled = [...hotTicketsMock].sort(() => 0.5 - Math.random());
      resolve(shuffled);
    }, 400);
  });
};
