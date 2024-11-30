import db from './firebase.js';
import { doc, getDoc, setDoc } from "firebase/firestore";

async function addWorkoutToUser(userId, workoutId, workoutData) {
  try {
    // Reference to the parent user document
    const userRef = doc(db, "users", userId);

    // Check if the user exists
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      console.error(`Error: User with ID ${userId} does not exist.`);
      return;
    }

    // Reference to the workout document in the subcollection
    const workoutRef = doc(db, `users/${userId}/workouts`, workoutId);

    // Add the workout
    await setDoc(workoutRef, workoutData);
    console.log(`Workout ${workoutId} added successfully for user ${userId}.`);
  } catch (error) {
    console.error("Error adding workout:", error);
  }
}

// Example Usage
addWorkoutToUser("userID1", "workout123", {
  date: new Date().toISOString(),
  workoutType: "Endurance",
  workoutDetails: "7/3 repeaters",
  notes: "Wrist doesnt hurt anymore",
  metrics: { sleep: 7, motivationBeforeSession: 7, exhaustionBeforeSession: 3, exhaustionAfterSession: 4, duration: 60, weight: 70},
});
