const PaymentBadge = ({ status }) => {
  const styles = {
    paid: "text-green-600 capitalize",
    unpaid: "text-red-600 capitalize",
  };

  return <span className={styles[status]}>{status}</span>;
};

export default PaymentBadge;
