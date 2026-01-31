import styles from "./IncidentsTable.module.css";
import { Incident } from "../../entities/incident/model/types";

type Props = {
  visible: Incident[];
  start: number;
  total: number;
  page: number;
  onPrev: () => void;
  onNext: () => void;
};

export const IncidentsTable = ({
  visible,
  start,
  total,
  page,
  onPrev,
  onNext,
}: Props) => {
  return (
    <section className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <h3>Список инцидентов</h3>
        <span>
          Показано {start + 1}–{Math.min(start + 10, total)} из {total}
        </span>
      </div>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Номер ТТ</th>
              <th>Дата создания</th>
              <th>Приоритет</th>
              <th>Описание</th>
              <th>Состояние услуги</th>
              <th>Состояние ТТ</th>
              <th>Филиал</th>
            </tr>
          </thead>

          <tbody>
            {visible.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.createdAt}</td>
                <td>
                  <span
                    className={`${styles.priority} ${styles[`p${item.priority}`]}`}
                  >
                    {item.priority}
                  </span>
                </td>
                <td>{item.description}</td>
                <td
                >
                  {item.serviceStatus}
                </td>
                <td>{item.ticketStatus}</td>
                <td>{item.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          disabled={page === 1}
          onClick={onPrev}
          className={styles.pagination_text}
        >
          Назад
        </button>
        <span>{page}</span>
        <button
          disabled={start + 3 >= total}
          onClick={onNext}
          className={styles.pagination_text}
        >
          Вперёд
        </button>
      </div>
    </section>
  );
};
