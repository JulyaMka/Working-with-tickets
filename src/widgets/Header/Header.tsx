import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button";
import { ThemeToggle } from "../../shared/ui/ThemeToggle";

const handleCreate = () => {
  alert("Заглушка: тут будет создание инцидента");
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Система управления инцидентами</h1>
      <div className={styles.group_button}>
        <ThemeToggle />

        <Button variant="primary" onClick={handleCreate}>
          + Создать инцидент
        </Button>
      </div>
    </header>
  );
};
