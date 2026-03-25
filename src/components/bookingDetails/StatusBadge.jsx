const StatusBadge = ({ status }) => {
  const styles = {
    completed: "bg-green-100 text-green-600",
    pending: "bg-grey-100 text-grey-600",
    active: "bg-yellow-100 text-yellow-600",
    cancelled: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-3 py-1 rounded capitalize ${styles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
