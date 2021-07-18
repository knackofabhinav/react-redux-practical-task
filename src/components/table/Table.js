import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "../row/Row";
import axios from "axios";
import "./Table.css";
import { TYPE_COLORS } from "../row/Row";
import {
  addInitialData,
  userWallets,
  showTypes,
  setShowType0,
  setShowType1,
  setShowType2,
  setShowType3,
  setShowType4,
  setShowAll,
} from "../../features/wallet/walletSlice";

export const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector(userWallets);
  const { showAll, showType0, showType1, showType2, showType3, showType4 } =
    useSelector(showTypes);

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(
          `http://www.mocky.io/v2/5d889c8a3300002c0ed7da42`
        );
        dispatch(addInitialData(res.data.items));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  function getFilteredData(
    users,
    { showType0, showType1, showType2, showType3, showType4 }
  ) {
    const type0 = users.filter((user) => showType0 && user.type === 0);
    const type1 = users.filter((user) => showType1 && user.type === 1);
    const type2 = users.filter((user) => showType2 && user.type === 2);
    const type3 = users.filter((user) => showType3 && user.type === 3);
    const type4 = users.filter((user) => showType4 && user.type === 4);
    return [...type0, ...type1, ...type2, ...type3, ...type4].sort(
      (a, b) => a.index - b.index
    );
  }

  const filteredData = getFilteredData(users, {
    showType0,
    showType1,
    showType2,
    showType3,
    showType4,
  });

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
            <input
              type="checkbox"
              checked={showAll}
              onChange={() => dispatch(setShowAll())}
              id="all"
            />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => dispatch(setShowType0())}
              checked={showType0}
              id="0"
            />
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
            <input
              type="checkbox"
              onChange={() => dispatch(setShowType1())}
              checked={showType1}
              id="1"
            />
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
            <input
              type="checkbox"
              onChange={() => dispatch(setShowType2())}
              checked={showType2}
              id="2"
            />
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
            <input
              type="checkbox"
              onChange={() => dispatch(setShowType3())}
              checked={showType3}
              id="3"
            />
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
            <input
              type="checkbox"
              onChange={() => dispatch(setShowType4())}
              checked={showType4}
              id="4"
            />
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
        {filteredData.length !== 0 ? (
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
              {filteredData.map((user) => (
                <Row key={user.index} user={user} />
              ))}
            </tbody>
          </table>
        ) : (
          <h1>Loading Data from server...</h1>
        )}
      </div>
    </div>
  );
};
