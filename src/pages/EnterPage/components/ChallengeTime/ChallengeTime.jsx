import "./style.css";

const ChallengeTime = () => {
  const events = [
    {
      iconColor: "#ff9900",
      title: "RC-Code Azerbaijan(Yoxlama-imtahan)",
      // date: "23 November 2025 - 01 February 2026",
      // subtitle: "RC-Code Azerbaijan (Yoxlama imtahan)",
      // details: [
      //   "Math, Science, Tech. & Eng",
      //   "Online exam, 24 hours available",
      //   "(1 camera connection required)",
      // ],
    },
    {
      iconColor: "#00aaff",
      title: "RC-Code Azerbaijan(Yerli əsas imtahan)",
      // date: "15 February 2026",
      // subtitle: "RC-Code Azerbaijan Yerli Əsas İmtahan",
      // details: [
      //   "Math, Science, Tech. & Eng",
      //   "Available for 20 hours (00:00–20:00 GMT)",
      //   "(1 camera connection required)",
      // ],
    },
    {
      iconColor: "#7b00ff",
      title: "RC-Code Azerbaijan(Yerli final)",
      // date: "01 March 2026",
      // subtitle: "RC-Azerbaijan Yerli Final",
      // details: [
      //   "Exam times to be announced after Finals",
      //   "(2 camera connections required)",
      // ],
    },
    {
      iconColor: "#ff3366",
      title: "Dünya Final Robot Challenge",
      // date: "July 2026",
      // subtitle: "Dünya Final Robot Challenge",
      // details: ["Italy, Rome"],
    },
  ];


  const exams = [
    {
      iconColor: "#ff9900",
      title: "Qualification Exams",
      date: "23 November 2025 - 01 February 2026",
      subtitle: "RC-Code Azerbaijan (Yoxlama imtahan)",
      details: [
        "Math, Science, Tech. & Eng",
        "Online exam, 24 hours available",
        "(1 camera connection required)",
      ],
    },
    {
      iconColor: "#00aaff",
      title: "Final Exams",
      date: "15 February 2026",
      subtitle: "RC-Code Azerbaijan Yerli Əsas İmtahan",
      details: [
        "Math, Science, Tech. & Eng",
        "Available for 20 hours (00:00–20:00 GMT)",
        "(1 camera connection required)",
      ],
    },
    {
      iconColor: "#7b00ff",
      title: "Best of the Bests Exams",
      date: "01 March 2026",
      subtitle: "RC-Azerbaijan Yerli Final",
      details: [
        "Exam times to be announced after Finals",
        "(2 camera connections required)",
      ],
    },
    {
      iconColor: "#ff3366",
      title: "STEM Grand Final",
      date: "July 2026",
      subtitle: "Dünya Final Robot Challenge",
      details: ["Italy, Rome"],
    },
  ];

  return (
    <div className="challenge-time-container">

    <div className="challenge-time">
      <h1 className="challenge-title">Robot Challenge Olimpiada – Əsas Tarixlər</h1>
      <div className="event-row">
        {events.map((event, i) => (
          <div key={i} className="event-card">
            <div
              className="event-icon"
              style={{ backgroundColor: event.iconColor }}
            >
              📅
            </div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <h4 className="event-subtitle">{event.subtitle}</h4>
            {/* <ul className="event-details">
              {event.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </div>
    <div className="exam-time">
 <div className="event-row">
        {exams.map((event, i) => (
          <div key={i} className="event-card">
        
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <ul className="event-details">
              {event.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default ChallengeTime;
