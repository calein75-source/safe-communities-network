export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Hero Section */}
      <section
        style={{
          background: "#0B3D91",
          color: "white",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          Safe Communities Network (SCN)
        </h1>

        <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
          Connecting Communities. Protecting Lives.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              padding: "15px 30px",
              marginRight: "15px",
              background: "#FFD700",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Report Incident
          </button>

          <button
            style={{
              padding: "15px 30px",
              background: "white",
              color: "#0B3D91",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Join SCN
          </button>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "60px 20px" }}>
        <h2>About SCN</h2>

        <p>
          Safe Communities Network (SCN) is a community-driven digital
          platform that empowers citizens to report security incidents,
          coordinate emergency response, and build safer communities
          through technology and partnerships.
        </p>
      </section>

      {/* Services */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "60px 20px",
        }}
      >
        <h2>Our Services</h2>

        <ul>
          <li>Emergency Incident Reporting</li>
          <li>Community Safety Alerts</li>
          <li>Volunteer Coordination</li>
          <li>Emergency Response Support</li>
          <li>Community Awareness Programs</li>
        </ul>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0B3D91",
          color: "white",
          padding: "25px",
          textAlign: "center",
        }}
      >
        © 2026 Safe Communities Network (SCN)
        <br />
        Connecting Communities. Protecting Lives.
      </footer>

    </main>
  );
}
