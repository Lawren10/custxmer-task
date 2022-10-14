import React from "react";
import {StyleSheet, Text, View} from "react-native";
import DateItem from "./DateItem";

export default function Custxmers({parameters}) {
  let {dates, month, year} = parameters;
  let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dateMoment = () => {
    let dayOfMonth = new Date(year, month - 1) + 1;
    let splitAll = dayOfMonth.split(" ");
    let actualMonth = splitAll[1];
    let actualYear = splitAll[3];

    let fullmonth = months.filter((item) => item.includes(actualMonth));

    return `${fullmonth[0]},${actualYear}`;
  };

  let displayPadding = () => {
    let dayOfMonth = new Date(year, month - 1) + 1;
    let splitAll = dayOfMonth.split(" ");
    let dayOfWeek = splitAll[0];
    let paddingDays = daysOfWeek.slice(0, daysOfWeek.indexOf(dayOfWeek));
    // console.log(paddingDays);
    let allPadding = paddingDays.map((index) => {
      return <View key={index} style={styles.emptyCalDateTextCont} />;
    });

    return allPadding;
  };

  let displayMonthDays = () => {
    let newDatesActivity = {};
    dates.forEach((element) => {
      newDatesActivity[element.date] = element;
    });

    // console.log(newDatesActivity);

    let daysInMonth = new Date(year, month, 0).toLocaleString().split(" ")[2];
    let getDay = new Date().getDate();
    let allMonthDays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      let showEmoji = day in newDatesActivity;

      if (day === getDay) {
        allMonthDays.push(
          <DateItem
            key={day}
            dateNum={day}
            todayDate={true}
            emoji={showEmoji ? newDatesActivity[day].mood : ""}
          />
        );
        continue;
      }
      allMonthDays.push(
        <DateItem
          key={day}
          dateNum={day}
          todayDate={false}
          emoji={showEmoji ? newDatesActivity[day].mood : ""}
        />
      );
    }
    // console.log(getDay);
    return allMonthDays;
  };

  return (
    <View style={styles.body}>
      <View style={styles.monthCont}>
        <Text style={styles.monthText}>{dateMoment()}</Text>
      </View>

      <View style={styles.calHeader}>
        <Text style={styles.calHeaderText}>Mon</Text>
        <Text style={styles.calHeaderText}>Tue</Text>
        <Text style={styles.calHeaderText}>Wed</Text>
        <Text style={styles.calHeaderText}>Thu</Text>
        <Text style={styles.calHeaderText}>Fri</Text>
        <Text style={styles.calHeaderText}>Sat</Text>
        <Text style={styles.calHeaderText}>Sun</Text>
      </View>

      <View style={styles.calDateCont}>
        {displayPadding()}
        {displayMonthDays()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 30,
    paddingHorizontal: 10,
  },

  monthCont: {
    marginVertical: 10,
  },
  monthText: {
    fontWeight: "800",
    fontSize: 30,
  },
  calHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
  },
  calHeaderText: {
    fontWeight: "900",
    width: "14%",
    padding: 4,
    color: "gray",
    textAlign: "center",
  },

  calDateCont: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },

  emptyCalDateTextCont: {
    width: "14%",
    paddingHorizontal: 4,
    paddingVertical: 15,
    // borderWidth: 1,
    // borderColor: "#eee",
  },
});
