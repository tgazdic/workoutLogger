import db from './firebase.js'; // Import Firestore instance
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods

// Function to add a user
async function addUser(userId, name, email) {
  try {
    // Create a reference to the document in the "users" collection
    const userRef = doc(db, "users", userId);

    // User data to add to Firestore
    const userData = {
      userId: userId,
      name: name,
      email: email,
      createdAt: new Date().toISOString(),
    };

    // Write data to Firestore
    await setDoc(userRef, userData);

    console.log(`User ${name} added successfully.`);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// Example usage
addUser("userID1", "Jane Doe", "jane.doe@example.com");
