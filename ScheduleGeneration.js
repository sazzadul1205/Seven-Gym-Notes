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

// Main function to generate trainer schedule using availableDays array and given start/end times
function generateTrainerSchedule(trainer, startTime, endTime) {
  const { name: trainerName, classTypes, availableDays } = trainer;

  // Format trainer name to replace spaces with underscores
  const formattedName = formatName(trainerName);

  // Parse the given start and end time strings
  const start = parseTime(startTime);
  const end = parseTime(endTime);

  // Generate hourly time slots from start to end (inclusive) in 24-hr format
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
      // Use the slot string (e.g., "09:00") directly as the key
      const timeKey = slot;

      // Choose a random class type from the input array
      const classType = randomElement(classTypes);

      // Determine participant limit based on class type
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

      // Generate classPrice: 50% chance free; if not, a random number between 10 and 50
      const classPrice = Math.random() < 0.5 ? "free" : getRandomInt(10, 50);

      // Generate unique id without random number
      const id = `${formattedName}-${day}-${timeKey}`;

      // Build the time slot object for this class
      schedule[day][timeKey] = {
        id: id,
        classType: classType,
        participant: {},
        participantLimit: participantLimit,
        classPrice: classPrice,
        start: slot,
        end: `${slot.slice(0, 2)}:59`, // Assuming class ends at the 59th minute of the hour
      };
    });
  });

  // Return the final schedule object for this trainer
  return {
    trainerName: trainerName,
    trainerSchedule: schedule,
  };
}

// ----- Example usage with multiple trainers -----
// Input data for trainers
const trainers = [
  {
    name: "Mike Tyson",
    specialization: "Boxing Instructor",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    classTypes: ["Drop-In Class", "Private Session"],
  },
  {
    name: "James Woods",
    specialization: "Boxing Instructor",
    availableDays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
    classTypes: ["Private Session", "Outdoor Class"],
  },
  {
    name: "Chris Knight",
    specialization: "Boxing Instructor",
    availableDays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
    classTypes: ["Partner Workout", "Open Gym Class"],
  },
  {
    name: "Anna Cruz",
    specialization: "Boxing Instructor",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    classTypes: [
      "Drop-In Class",
      "Private Session",
      "Open Gym Class",
      "Outdoor Class",
      "Workshops",
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

// Write the output to a JSON file in the same folder
fs.writeFileSync(
  "generatedTrainersSchedule.json",
  JSON.stringify(finalSchedule, null, 2),
  "utf8"
);
console.log("Schedule data has been saved to generatedTrainersSchedule.json");
