import "./Row.css";

export const TYPE_COLORS = {
  0: "#48BEFF",
  1: "#3DFAFF",
  2: "#43C59E",
  3: "#3D7068",
  4: "#14453D",
};
export const Row = ({ user }) => {
  const badgeColor = (user) => {
    if (user.type === 0) {
      return { backgroundColor: TYPE_COLORS["0"] };
    } else if (user.type === 1) {
      return { backgroundColor: TYPE_COLORS["1"] };
    } else if (user.type === 2) {
      return { backgroundColor: TYPE_COLORS["2"] };
    } else if (user.type === 3) {
      return { backgroundColor: TYPE_COLORS["3"] };
    } else if (user.type === 4) {
      return { backgroundColor: TYPE_COLORS["4"] };
    }
  };

  return (
    <tr key={user.index}>
      <td style={badgeColor(user)}>{user.index}</td>
      <td>{user.email}</td>
      <td>{user.fullName}</td>
      <td>{user.wallet1} </td>
      <td>{user.wallet2} </td>
      <td>{user.wallet3} </td>
    </tr>
  );
};
