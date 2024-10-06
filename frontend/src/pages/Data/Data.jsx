import React, { useContext, useEffect, useState } from "react";
import "./Data.css";
import { toast } from "react-toastify";
import axios from "axios";
// import { assets, url, currency } from "../../assets/assets";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import { StoreContext } from "../../Context/StoreContext";

import Chart from "chart.js/auto";

const Order = () => {
  // const [orders, setOrders] = useState([]);
  // const [topItems, setTopItems] = useState([]);
  // const [userTotals, setUserTotals] = useState([]);

  const [data, setData] = useState([]);
  const { url, token, currency } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  // const fetchAllOrders = async () => {
  //   const response = await axios.get(`${url}/api/order/list`);
  //   if (response.data.success) {
  //     setOrders(response.data.data.reverse());
  //     console.log(response.data.data);
  //   } else {
  //     toast.error("Error");
  //   }
  // };

  // const fetchTopItems = async () => {
  //   try {
  //     const response = await axios.get(`${url}/api/order/top-items`);
  //     if (response.data.success) {
  //       setTopItems(response.data.data);
  //       console.log(response.data.data);
  //     } else {
  //       toast.error("Error fetching top items");
  //     }
  //   } catch (error) {
  //     toast.error("Error fetching top items");
  //   }
  // };

  // useEffect(() => {
  //   fetchTopItems();
  // }, []);

  // const statusHandler = async (event, orderId) => {
  //   console.log(event, orderId);
  //   const response = await axios.post(`${url}/api/order/status`, {
  //     orderId,
  //     status: event.target.value,
  //   });
  //   if (response.data.success) {
  //     await fetchAllOrders();
  //   }
  // };

  // useEffect(() => {
  //   fetchAllOrders();
  // }, []);

  // const fetchUserOrderTotals = async () => {
  //   try {
  //     const response = await axios.get(`${url}/api/order/list`);

  //     if (response.data.success) {
  //       const orders = response.data.data;

  //       // Reduce the orders to get total amount per user
  //       const userTotals = orders.reduce((acc, order) => {
  //         const userId = order.address.firstName;
  //         const userName = `${order.address.firstName} ${order.address.lastName}`;
  //         const amount = order.amount;

  //         if (!acc[userId]) {
  //           acc[userId] = { userId, userName, totalAmount: 0 };
  //         }
  //         acc[userId].totalAmount += amount;
  //         return acc;
  //       }, {});

  //       const userTotalsArray = Object.values(userTotals);
  //       setUserTotals(userTotalsArray);
  //       console.log(userTotalsArray);
  //     } else {
  //       toast.error("Error fetching user totals");
  //     }
  //   } catch (error) {
  //     toast.error("Error fetching user totals");
  //   }
  // };

  // useEffect(() => {
  //   fetchUserOrderTotals();
  // }, []);

  return (
    <div className="order add">
      <h3>Your order history graph</h3>

      <div className="order-list">
        {/* <div className="top5items">
          <Bar
            data={{
              labels: topItems.map((data) => data._id),
              datasets: [
                {
                  label: "Top 5 ordered items",
                  data: topItems.map((data) => data.totalQuantity),
                  backgroundColor: "rgb(136, 191, 77)",
                  borderColor: "rgb(136, 191, 77)",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Ordered items by date",
                },
              },
            }}
          />
        </div> */}

        {/* <div className="totalValue">
          <Bar
            data={{
              labels: userTotals.map((data) => data.userName),
              datasets: [
                {
                  label: "Total order value of every customers",
                  data: userTotals.map((data) => data.totalAmount),
                  backgroundColor: "rgb(136, 191, 77)",
                  borderColor: "rgb(136, 191, 77)",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Ordered items by date",
                },
              },
            }}
          />
        </div> */}

        <div className="dailySpending">
          <Line
            data={{
              labels: data.map((item) =>
                new Date(item.date).toLocaleDateString()
              ), // Format dates as labels
              datasets: [
                {
                  label: "Daily Spendings",
                  data: data.map((item) => item.amount), // Use the 'amount' field
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
                  fill: false, // Set to true if you want to fill under the line
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  display: false, // Ensure title is displayed
                  text: "Monthly Spendings", // Title text
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Date", // X-axis label
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Amount (TK)", // Y-axis label
                  },
                },
              },
            }}
          />
        </div>

        {/* <div className="doughnut">
          <Doughnut
            data={{
              labels: userTotals.map((data) => data.userName),
              datasets: [
                {
                  label: "Total Order amount",
                  data: userTotals.map((data) => data.totalAmount),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(100, 200, 255, 0.8)",
                    "rgba(255, 200, 100, 0.8)",
                    "rgba(150, 100, 255, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                    "rgba(100, 200, 255, 0.8)",
                    "rgba(255, 200, 100, 0.8)",
                    "rgba(150, 100, 255, 0.8)",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Total order value of every customers",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Order;
