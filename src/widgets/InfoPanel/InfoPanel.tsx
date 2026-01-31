import styles from "./InfoPanel.module.css";

export const InfoPanel = () => {
  return (
    <div className={styles.card}>
      <h3>Информационные сообщения</h3>
      <div className={styles.group_panel}>
      <p className={styles.infoTitle}>Telegram Bot временно недоступен</p>
      <p className={styles.infoText}>
        Проводится обновление, бот возобновит работу до 15:00
      </p>
      </div>
    </div>
  );
};
