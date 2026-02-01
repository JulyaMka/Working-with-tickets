export type Incident = {
  id: number;
  createdAt: string;
  priority: 1 | 2 | 3 | 4 | 5;
  description: string;
  serviceStatus: "Доступна" | "Недоступна";
  ticketStatus: "Открыт" | "В работе" | "Закрыт";
  branch: string;
};
