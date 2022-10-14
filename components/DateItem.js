import React from "react";
import {View, Text, StyleSheet} from "react-native";

function DateItem({dateNum, todayDate, emoji}) {
  let emojiList = {
    fair: "😊",
    happy: "😀",
    sad: "😡",
    sick: "🤢	",
  };

  return (
    <View style={styles.calDateTextCont}>
      <Text>{emoji in emojiList ? emojiList[emoji] : ""}</Text>
      <Text style={todayDate ? styles.calDateTextBold : styles.calDateText}>
        {dateNum}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  calDateTextCont: {
    width: "14%",
    paddingHorizontal: 4,
    paddingVertical: 4,
    // borderWidth: 1,
    // borderColor: "#eee",
  },
  calDateText: {
    color: "gray",
    textAlign: "center",
  },
  calDateTextBold: {
    color: "gray",
    textAlign: "center",
    fontWeight: "900",
  },
  emojiCont: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 50,
    textAlignc: "center",
  },
});

export default DateItem;
