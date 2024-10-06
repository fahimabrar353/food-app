import React, { useEffect, useState } from "react";
import "./Data.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets, url, currency } from "../../assets/assets";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import Chart from "chart.js/auto";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [topItems, setTopItems] = useState([]);
  const [userTotals, setUserTotals] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data.reverse());
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const fetchTopItems = async () => {
    try {
      const response = await axios.get(`${url}/api/order/top-items`);
      if (response.data.success) {
        setTopItems(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching top items");
      }
    } catch (error) {
      toast.error("Error fetching top items");
    }
  };

  useEffect(() => {
    fetchTopItems();
  }, []);

  const statusHandler = async (event, orderId) => {
    console.log(event, orderId);
    const response = await axios.post(`${url}/api/order/status`, {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchUserOrderTotals = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);

      if (response.data.success) {
        const orders = response.data.data;

        // Reduce the orders to get total amount per user
        const userTotals = orders.reduce((acc, order) => {
          const userId = order.address.firstName;
          const userName = `${order.address.firstName} ${order.address.lastName}`;
          const amount = order.amount;

          if (!acc[userId]) {
            acc[userId] = { userId, userName, totalAmount: 0 };
          }
          acc[userId].totalAmount += amount;
          return acc;
        }, {});

        const userTotalsArray = Object.values(userTotals);
        setUserTotals(userTotalsArray);
        console.log(userTotalsArray);
      } else {
        toast.error("Error fetching user totals");
      }
    } catch (error) {
      toast.error("Error fetching user totals");
    }
  };

  useEffect(() => {
    fetchUserOrderTotals();
  }, []);

  return (
    <div className="order add">
      <h3>Data Page</h3>

      <div className="order-list">
        <div className="top5items">
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
        </div>

        <div className="totalValue">
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
        </div>

        <div className="dailySpending">
          <Line
            data={{
              labels: orders.map((data) =>
                new Date(data.date).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              ),
              datasets: [
                {
                  label: "Daily Spendings of customers",
                  data: orders.map((data) => data.amount),
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
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
                  text: "Monthly spendings",
                },
              },
            }}
          />
        </div>

        <div className="doughnut">
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
        </div>
      </div>
    </div>
  );
};

export default Order;
