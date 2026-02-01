import { useEffect, useState } from "react";
import styles from "./IncidentsPage.module.css";

import { Incident } from "../../entities/incident";
import { incidentsApi } from "../../shared/api/incidentsApi";
import { fetchHotTickets } from "../../shared/api/alertsApi";

import { Header } from "../../widgets/Header";
import { InfoPanel } from "../../widgets/InfoPanel";
import { AlertsPanel } from "../../widgets/AlertsPanel";
import { IncidentsTable } from "../../widgets/IncidentsTable";

const ITEMS_PER_PAGE = 10;

export const IncidentsPage = () => {
  const [page, setPage] = useState(1);

  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [incidentsLoading, setIncidentsLoading] = useState(true);

  const [hotTickets, setHotTickets] = useState<number[]>([]);
  const [hotLoading, setHotLoading] = useState(false);

  useEffect(() => {
    loadIncidents();
    loadHotTickets();
  }, []);

  const loadIncidents = async () => {
    setIncidentsLoading(true);
    try {
      const data = await incidentsApi.getIncidents();
      setIncidents(data);
    } finally {
      setIncidentsLoading(false);
    }
  };

  const loadHotTickets = async () => {
    setHotLoading(true);
    try {
      const data = await fetchHotTickets();
      setHotTickets(data);
    } finally {
      setHotLoading(false);
    }
  };

  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = incidents.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />

      {/* Top section */}
      <section className={styles.top}>
        <InfoPanel />

        {hotLoading && hotTickets.length === 0 ? (
          <div>Загрузка горящих тикетов...</div>
        ) : (
          <AlertsPanel
            hotTickets={hotTickets}
            hotLoading={hotLoading}
            onRefresh={loadHotTickets}
          />
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
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() =>
            setPage((p) =>
              p * ITEMS_PER_PAGE < incidents.length ? p + 1 : p
            )
          }
        />
      )}
    </div>
  );
};
