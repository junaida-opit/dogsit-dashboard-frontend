const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="font-semibold mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default Card;
