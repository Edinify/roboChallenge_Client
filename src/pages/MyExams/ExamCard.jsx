import { useEffect, useState } from "react";
import { FiInfo, FiClock, FiPlay, FiLogIn } from "react-icons/fi";
import { useGetUserQuery } from "../../services/auth/authApi";
import moment from "moment";

const ExamCard = ({ exam }) => {
  const { data: userData } = useGetUserQuery();
  const userName = `${userData?.firstName ?? ""} ${
    userData?.lastName ?? ""
  }`.trim();

  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isOver, setIsOver] = useState(false);



  useEffect(() => {
    if (!exam?.date) return;

    const target = new Date(exam.date).getTime();

    const tick = () => {
      const now = Date.now();
      let diff = target - now;

      if (diff <= 0) {
        setIsOver(true);
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }

      const d = Math.floor(diff / 86400000);
      diff -= d * 86400000;
      const h = Math.floor(diff / 3600000);
      diff -= h * 3600000;
      const m = Math.floor(diff / 60000);
      diff -= m * 60000;
      const s = Math.floor(diff / 1000);

      setTimeLeft({ d, h, m, s });
      setIsOver(false);
    };

    tick(); // ilk hesab
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [exam?.date]);

  return (
    <div className="exam-card">
      <div className="exam-card__container">
        <div className="exam-card__title-pill">{exam?.title}</div>

        <div className="exam-card__info">
          <div className="row">
            <span className="label">Name:</span>
            <span className="value strong">{userName || "-"}</span>
          </div>
          <div className="row">
            <span className="label">Language:</span>
            <span className="value">{exam?.language ?? "-"}</span>
          </div>

          <div className="row">
            <span className="label">Grade:</span>
            <span className="value">{userData?.grade ?? "-"}</span>
          </div>
          <div className="row">
            <span className="label">Exam Date:</span>
            <span className="value strong">
              {exam?.date ? moment(exam.date).format("DD MMMM YYYY") : "-"}
            </span>
          </div>
          <div className="row">
            <span className="label">Exam Time:</span>
            <span className="value strong">{exam?.during ?? "-"} min</span>
          </div>
        </div>

        {exam?.description && (
          <div className="exam-card__note">
            <FiInfo />
            <span>{exam.description}</span>
          </div>
        )}

        <button type="button" className="btn btn-training">
          <FiPlay />
          <span>Start Training</span>
        </button>

        <button type="button" className="btn btn-start" disabled={!isOver}>
          <FiLogIn />
          <span>{isOver ? "Start Exam" : "Not Available Yet"}</span>
        </button>

        {/* Sadə countdown göstərişi */}
        <div className="exam-card__countdown">
          <div className={`cc ${isOver ? "live" : ""}`}>
            <FiClock />
          </div>
          {!exam?.date ? (
            <div className="chip">—</div>
          ) : isOver ? (
            <div className="chip live-chip">LIVE</div>
          ) : (
            <>
              <div className="chip">{timeLeft.d}d</div>
              <div className="chip">{timeLeft.h}h</div>
              <div className="chip">{timeLeft.m}m</div>
              <div className="chip">{timeLeft.s}s</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
