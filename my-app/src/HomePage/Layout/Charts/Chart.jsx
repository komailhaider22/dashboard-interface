import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

const BarChart = () => {
  const data = [
    {
      image: "https://robohash.org/ututexcepturi.png?size=50x50&set=set1",
      id: 1,
      first_name: "Nevins",
      last_name: "Flintoft",
      email: "nflintoft0@nifty.com",
      gender: "Male",
      sales: "$266.60",
      date: "12/24/2021",
      boolean: false,
    },
    {
      image:
        "https://robohash.org/ipsamexercitationemfacilis.png?size=50x50&set=set1",
      id: 2,
      first_name: "Dalt",
      last_name: "Kiessel",
      email: "dkiessel1@theglobeandmail.com",
      gender: "Male",
      sales: "$245.91",
      date: "5/9/2022",
      boolean: true,
    },
    {
      image: "https://robohash.org/providentvelnisi.png?size=50x50&set=set1",
      id: 3,
      first_name: "Coraline",
      last_name: "Tolchar",
      email: "ctolchar2@imdb.com",
      gender: "Female",
      sales: "$407.81",
      date: "9/15/2022",
      boolean: false,
    },
    {
      image:
        "https://robohash.org/omnisearumlaboriosam.png?size=50x50&set=set1",
      id: 4,
      first_name: "Neale",
      last_name: "Fayerman",
      email: "nfayerman3@columbia.edu",
      gender: "Male",
      sales: "$296.15",
      date: "1/17/2022",
      boolean: true,
    },
    {
      image: "https://robohash.org/expeditaadipisciet.png?size=50x50&set=set1",
      id: 5,
      first_name: "Abeu",
      last_name: "Meffan",
      email: "ameffan4@yahoo.co.jp",
      gender: "Male",
      sales: "$120.36",
      date: "7/10/2022",
      boolean: true,
    },
    {
      image: "https://robohash.org/sintnemovoluptas.png?size=50x50&set=set1",
      id: 6,
      first_name: "Nina",
      last_name: "Bramley",
      email: "nbramley5@xrea.com",
      gender: "Female",
      sales: "$215.68",
      date: "10/23/2021",
      boolean: false,
    },
    {
      image: "https://robohash.org/blanditiisquout.png?size=50x50&set=set1",
      id: 7,
      first_name: "Killy",
      last_name: "Bridgen",
      email: "kbridgen6@etsy.com",
      gender: "Male",
      sales: "$364.87",
      date: "5/10/2022",
      boolean: true,
    },
    {
      image: "https://robohash.org/nondictaodit.png?size=50x50&set=set1",
      id: 8,
      first_name: "Ollie",
      last_name: "Schott",
      email: "oschott7@desdev.cn",
      gender: "Female",
      sales: "$194.83",
      date: "10/11/2021",
      boolean: false,
    },
    {
      image: "https://robohash.org/autsitaliquid.png?size=50x50&set=set1",
      id: 9,
      first_name: "Art",
      last_name: "Leatt",
      email: "aleatt8@technorati.com",
      gender: "Male",
      sales: "$334.87",
      date: "11/20/2021",
      boolean: false,
    },
    {
      image:
        "https://robohash.org/assumendadelectusamet.png?size=50x50&set=set1",
      id: 10,
      first_name: "Kaylil",
      last_name: "Joss",
      email: "kjoss9@walmart.com",
      gender: "Female",
      sales: "$241.83",
      date: "12/8/2021",
      boolean: true,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: "id",
    yField: "sales",
    seriesField: "first_name",

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return <Column width={500} {...config} />;
};

export default BarChart;