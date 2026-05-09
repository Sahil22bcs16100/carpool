import { useEffect, useState } from "react";
import "../styles/tickets.css";

function MyTickets() {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets =
      JSON.parse(localStorage.getItem("tickets")) || [];

    setTickets(storedTickets);
  }, []);

  return (
    <div className="tickets-page">

      <h1>My Support Tickets</h1>

      {tickets.length === 0 ? (
        <p>No support tickets created yet.</p>
      ) : (
        <table className="tickets-table">

          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Issue Type</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {tickets.map((ticket, index) => (

              <tr key={index}>
                <td>#{ticket.id}</td>
                <td>{ticket.issue}</td>
                <td>{ticket.priority}</td>
                <td>
  <span className={`status-badge ${ticket.status.toLowerCase()}`}>
    {ticket.status}
  </span>
</td>
              </tr>

            ))}

          </tbody>

        </table>
      )}

    </div>
  );
}

export default MyTickets;