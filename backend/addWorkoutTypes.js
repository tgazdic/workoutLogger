import db from './firebase.js'; // Import Firestore instance
import { doc, setDoc } from "firebase/firestore"; // Firestore methods

// Predefined list of possible workouts
const workoutTypes = [
  { id: "endurance", name: "Endurance" },
  { id: "strength", name: "Strength" },
  { id: "outdoors", name: "Outdoors" },
  { id: "conditioning", name: "Conditioning" }
];

// Function to add workout types to Firestore
async function addWorkoutTypes() {
  try {
    for (const workout of workoutTypes) {
      // Reference to the workout type document
      const workoutRef = doc(db, "workoutTypes", workout.id);

      // Add workout type to Firestore
      await setDoc(workoutRef, { name: workout.name });
      console.log(`Workout type "${workout.name}" added successfully.`);
    }
  } catch (error) {
    console.error("Error adding workout types:", error);
  }
}

// Run the function
addWorkoutTypes();
