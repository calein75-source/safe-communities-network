export default function Report() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Report an Incident</h1>

      <p>
        Help us improve community safety by reporting an incident.
      </p>

      <form style={{ maxWidth: "600px" }}>
        <label>Full Name</label><br />
        <input
          type="text"
          placeholder="Enter your name"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Location</label><br />
        <input
          type="text"
          placeholder="Incident location"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Description</label><br />
        <textarea
          placeholder="Describe what happened"
          rows="6"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        ></textarea>

        <button
          style={{
            padding: "12px 25px",
            background: "#0B3D91",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Submit Report
        </button>
      </form>
    </main>
  );
            }
