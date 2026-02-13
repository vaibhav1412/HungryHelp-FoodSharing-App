function StatsCard({ title, value, color }) {
  return (
    <div className={`card shadow-sm border-0 p-4 text-white bg-${color}`}>
      <h6>{title}</h6>
      <h3 className="fw-bold">{value}</h3>
    </div>
  );
}

export default StatsCard;
