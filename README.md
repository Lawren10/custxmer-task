# Custxmers mobile react native take home task.

### Mobile (React Native) Requirements

Create a simple Calendar mobile application with a single component: Calendar.

The Calendar component receives a JavaScript object as props.

The object has three properties: dates, month, and year.

Example:

`{ dates: [ { date: 4, mood: 'sad', }, { date: 1, mood: 'sad', }, { date: 4, mood: 'happy', }, { date: 6, mood: 'fair', }, { date: 27, mood: 'sad', } ], month: 9, year: 2022, }`

1.If any date object appears twice with the same date (As in the case of 4th September above) the last date is used.
2.If the date passed is not found in that month, it is ignored.
3.The Calendar for any month of the year must be correct.
4.Changing the values in the props automatically updates the Calendar.
5.The app displays a single month at a time. It only changes when you change the prop values.
6.The current date is always bolded as in the case of 7th September, 2022 in the UI.
