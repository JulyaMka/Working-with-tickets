import { useEffect, useState } from "react";
import styles from "./IncidentsPage.module.css";

import { Incident } from "../../entities/incident";
import { incidentsApi } from "../../shared/api/incidentsApi";
import { fetchHotTickets } from "../../shared/api/alertsApi";
import { InfoPanel } from "../../widgets/InfoPanel";
import { Header } from "../../widgets/Header";
import { AlertsPanel } from "../../widgets/AlertsPanel";
import { IncidentsTable } from "../../widgets/IncidentsTable";

const ITEMS_PER_PAGE = 10;

export const IncidentsPage = () => {
  const [page, setPage] = useState(1);

  const [hotTickets, setHotTickets] = useState<number[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [hotLoading, setHotLoading] = useState(true);
  const [incidentsLoading, setIncidentsLoading] = useState(true);

  useEffect(() => {
    loadHotTickets();
    loadIncidents();
  }, []);

  const loadHotTickets = async () => {
    setHotLoading(true);
    const data = await fetchHotTickets();
    setHotTickets(data);
    setHotLoading(false);
  };

  const loadIncidents = async () => {
    setIncidentsLoading(true);
    const data = await incidentsApi.getIncidents();
    setIncidents(data);
    setIncidentsLoading(false);
  };

  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = incidents.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />

      {/* Top section */}
      <section className={styles.top}>
        <InfoPanel/>
        {hotLoading ? (
          <div>Загрузка горящих инцидентов...</div>
        ) : (
          <AlertsPanel hotTickets={hotTickets} onRefresh={loadHotTickets} />
        )}
      </section>

      {/* Table */}
      {incidentsLoading ? (
        <div>Загрузка инцидентов...</div>
      ) : (
        <IncidentsTable
          visible={visible}
          start={start}
          total={incidents.length}
          page={page}
          onPrev={() => setPage(page - 1)}
          onNext={() => setPage(page + 1)}
        />
      )}
    </div>
  );
};
