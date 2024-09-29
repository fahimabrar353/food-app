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

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data.reverse());
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

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

  return (
    <div className="order add">
      <h3>Data Page</h3>

      <div className="order-list">
        <div className="graph">
          <Line
            data={{
              labels: orders.map((data) => data.address.firstName),
              datasets: [
                {
                  label: "Sub Total",
                  data: orders.map((data) => data.amount),
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
                },
                {
                  label: "Total Value",
                  data: orders.map((data) => data.total_value),
                  backgroundColor: "#FF3030",
                  borderColor: "#FF3030",
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

        <div className="graph">
          <Doughnut
            data={{
              labels: orders.map((data) => data.address.firstName),
              datasets: [
                {
                  label: "Order amount",
                  data: orders.map((data) => data.amount),
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
                  text: "Ordered from Restaurant",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>

        <div className="graph">
          <Bar
            data={{
              labels: orders.map((data) => data.address.firstName),
              datasets: [
                {
                  label: "Total Value",
                  data: orders.map((data) => data.amount),
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
      </div>
    </div>
  );
};

export default Order;
