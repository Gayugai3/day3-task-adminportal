import React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import Card from "./Card";
import Charts from "./Charts";

function Dasboard() {
  const [searchParams, setParams] = useSearchParams();
  console.log([...searchParams]);
  console.log(Object.fromEntries([...searchParams]));
  return (
    <>
      <div className="row">
        <button
          className="btn btn-primary "
          onClick={() =>
            setParams(
              createSearchParams({
                ...Object.fromEntries([...searchParams]),
                price: 50,
              })
            )
          }
        >
          Change Price{" "}
        </button>
      </div>

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div className="row">
        <Card title="EARNINGS (MONTHLY)" value="$40,000" color="primary" />
        <Card title="EARNINGS (ANNUAL)" value="$215,000" color="success" />
        <Card title="TASKS" value="50%" color="info" />
        <Card title="PENDING REQUESTS" value="18" color="warning" />
      </div>

      <div className="row">
        <Charts heading="Earnings Overview" xlval="8" lgval="7" />
        <Charts heading="Revenue Sources" xlval="4" lgval="5" />
      </div>
    </>
  );
}

export default Dasboard;
