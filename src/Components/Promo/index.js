import React from "react";

const Promo = () => (
  <div className="row" style={{ margin: "0 0.5rem" }}>
    <div
      className="col s12"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "12px",
        padding: "20px 25px",
        marginTop: "15px",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span
          style={{
            fontSize: "2.5rem",
            animation: "bounce 1s infinite",
          }}
        >
          ⌨️
        </span>
        <div>
          <h5
            style={{
              margin: "0 0 5px 0",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.3rem",
            }}
          >
            Hey! Check out the typing game I built!
          </h5>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.95rem",
            }}
          >
            Improve your typing speed & have fun doing it! 🚀
          </p>
        </div>
      </div>
      <a
        href="https://typingblooms.com"
        target="_blank"
        rel="noopener noreferrer"
        className="waves-effect waves-light btn-large"
        style={{
          background: "#fff",
          color: "#667eea",
          fontWeight: "bold",
          borderRadius: "25px",
          padding: "0 30px",
          textTransform: "none",
          fontSize: "1rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        }}
      >
        Play Now! 🎮
      </a>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>
    </div>
  </div>
);

export default Promo;
