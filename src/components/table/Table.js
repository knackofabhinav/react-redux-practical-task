import "./Table.css";
import { useEffect } from "react";
import axios from "axios";
import { addInitialData, userWallets } from "../../features/wallet/walletSlice";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "../row/Row";
import { TYPE_COLORS } from "../row/Row";

export const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector(userWallets);

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        `http://www.mocky.io/v2/5d889c8a3300002c0ed7da42`
      );
      dispatch(addInitialData(res.data.items));
    })();
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <input type="checkbox" id="all" />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input type="checkbox" id="0" />
            <label htmlFor="0">Type 0</label>
            <div
              style={{
                height: "4px",
                width: "100%",
                backgroundColor: TYPE_COLORS["0"],
              }}
            />
          </div>
          <div>
            <input type="checkbox" id="1" />
            <label htmlFor="1">Type 1</label>
            <div
              style={{
                height: "4px",
                width: "100%",
                backgroundColor: TYPE_COLORS["1"],
              }}
            />
          </div>
          <div>
            <input type="checkbox" id="2" />
            <label htmlFor="2">Type 2</label>
            <div
              style={{
                height: "4px",
                width: "100%",
                backgroundColor: TYPE_COLORS["2"],
              }}
            />
          </div>
          <div>
            <input type="checkbox" id="3" />
            <label htmlFor="3">Type 3</label>
            <div
              style={{
                height: "4px",
                width: "100%",
                backgroundColor: TYPE_COLORS["3"],
              }}
            />
          </div>
          <div>
            <input type="checkbox" id="4" />
            <label htmlFor="4">Type 4</label>
            <div
              style={{
                height: "4px",
                width: "100%",
                backgroundColor: TYPE_COLORS["4"],
              }}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Wallet-1</th>
              <th>Wallet-2</th>
              <th>Wallet-3</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Row key={user.index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
