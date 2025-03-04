// Required Node.js module to handle file system operations
const fs = require("fs");

// Helper: Random integer in range [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper: Randomly select an element from an array
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Parse time string like "08:00 AM" into hours and minutes (24-hour format)
function parseTime(timeStr) {
  const [time, period] = timeStr.split(" ");
  let [hour, minute] = time.split(":").map(Number);
  if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
  return { hour, minute };
}

// Helper: Replace spaces with underscores in a name
function formatName(name) {
  return name.replace(/\s+/g, "_");
}

// Main function to generate trainer schedule
function generateTrainerSchedule(trainer, startTime, endTime) {
  const { name: trainerName, classTypes, availableDays } = trainer;
  const formattedName = formatName(trainerName);

  const start = parseTime(startTime);
  const end = parseTime(endTime);

  // Generate hourly time slots from start to end
  const timeSlots = [];
  for (let currentHour = start.hour; currentHour <= end.hour; currentHour++) {
    const formattedHour = currentHour.toString().padStart(2, "0");
    const formattedTime = `${formattedHour}:00`;
    timeSlots.push(formattedTime);
  }

  // Create the schedule object for this trainer
  const schedule = {};
  availableDays.forEach((day) => {
    schedule[day] = {};
    timeSlots.forEach((slot) => {
      const timeKey = slot;
      const classType = randomElement(classTypes);

      // Determine participant limit
      let participantLimit;
      if (classType.toLowerCase().includes("online")) {
        participantLimit = "No limit";
      } else if (
        classType.toLowerCase().includes("private") ||
        classType.toLowerCase().includes("session") ||
        classType.toLowerCase().includes("partner")
      ) {
        participantLimit = getRandomInt(2, 5);
      } else {
        participantLimit = getRandomInt(10, 20);
      }

      // Generate classPrice
      const classPrice = Math.random() < 0.5 ? "free" : getRandomInt(10, 50);

      // Generate unique id without random number
      const id = `${formattedName}-${day}-${timeKey}`;

      // Build the time slot object
      schedule[day][timeKey] = {
        id: id,
        classType: classType,
        participant: {},
        participantLimit: participantLimit,
        classPrice: classPrice,
        start: slot,
        end: `${slot.slice(0, 2)}:59`,
      };
    });
  });

  return {
    trainerName: trainerName,
    trainerSchedule: schedule,
  };
}

// ----- Example usage with multiple trainers -----
const trainers = [
  {
    name: "Isabella Parker",
    specialization: "Stretching Instructor",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    classTypes: [
      "Workshops",
      "Semi-Private Training",
      "Partner Workout",
      "Drop-In Class",
      "Outdoor Class",
    ],
  },
  {
    name: "Alexander Bell",
    specialization: "Stretching Instructor",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    classTypes: ["Group Class", "Open Gym Class"],
  },
  {
    name: "Lily Green",
    specialization: "Stretching Instructor",
    availableDays: ["Sunday", "Saturday", "Monday", "Tuesday", "Wednesday"],
    classTypes: [
      "Partner Workout",
      "Private Session",
      "Outdoor Class",
      "Workshops",
    ],
  },
  {
    name: "Ethan Wilson",
    specialization: "Stretching Instructor",
    availableDays: ["Sunday", "Saturday", "Monday", "Tuesday", "Wednesday"],
    classTypes: [
      "Open Gym Class",
      "Online Class",
      "Private Session",
      "Partner Workout",
      "Outdoor Class",
    ],
  },
];
// Separate trainers into two groups based on time slots
const group1 = trainers.slice(0, 2); // Trainers for 08:00 AM to 01:00 PM
const group2 = trainers.slice(2, 4); // Trainers for 02:00 PM to 07:00 PM

// Define time slots for each group
const group1StartTime = "08:00 AM";
const group1EndTime = "01:00 PM";
const group2StartTime = "02:00 PM";
const group2EndTime = "07:00 PM";

// Generate schedule for both groups
const scheduleGroup1 = group1.map((trainer) =>
  generateTrainerSchedule(trainer, group1StartTime, group1EndTime)
);
const scheduleGroup2 = group2.map((trainer) =>
  generateTrainerSchedule(trainer, group2StartTime, group2EndTime)
);

// Combine both group schedules
const finalSchedule = [...scheduleGroup1, ...scheduleGroup2];

// Write the output to a JSON file
fs.writeFileSync(
  "generatedTrainersSchedule.json",
  JSON.stringify(finalSchedule, null, 2),
  "utf8"
);
console.log("Schedule data has been saved to generatedTrainersSchedule.json");

// ----- CHECK FOR MISSING DAYS -----
const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const scheduledDays = new Set();

// Collect all scheduled days
finalSchedule.forEach(({ trainerSchedule }) => {
  Object.keys(trainerSchedule).forEach((day) => scheduledDays.add(day));
});

// Find missing days
const missingDays = allDays.filter((day) => !scheduledDays.has(day));

if (missingDays.length > 0) {
  console.log("Missing days in the schedule:", missingDays.join(", "));
} else {
  console.log("All days of the week are covered in the schedule.");
}
