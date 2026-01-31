import styles from "./AlertsPanel.module.css";
import { Button } from "../../shared/ui/Button";

type AlertsPanelProps = {
  hotTickets: number[];
  onRefresh: () => void;
};

export const AlertsPanel = ({ hotTickets, onRefresh }: AlertsPanelProps) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.alertHeader}>
        <h3>Оповещения</h3>
        <Button variant="secondary" onClick={onRefresh}>
          Обновить
        </Button>
      </div>

      <p>Горящие тикеты:</p>
      <ul className={styles.alertList}>
        {hotTickets.map((id) => (
          <li key={id} className={styles.item}>
            {id}
          </li>
        ))}
      </ul>

      <span className={styles.alertHint}>
        Тикеты будут просрочены менее чем через 4 часа
      </span>
    </div>
  );
};
