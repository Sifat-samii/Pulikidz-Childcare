import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const BookingScreen = () => {
  const [childName, setChildName] = useState("");
  const [caregiverId, setCaregiverId] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleBooking = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/bookings", {
        childName,
        caregiverId,
        timeSlot,
      });
      alert("Booking Successful!");
      console.log("Booking response: ", response.data);
    } catch (error) {
      console.error("Error making booking: ", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Caregiver</Text>
      <TextInput
        style={styles.input}
        placeholder="Child's Name"
        value={childName}
        onChangeText={setChildName}
      />
      <TextInput
        style={styles.input}
        placeholder="Caregiver ID"
        value={caregiverId}
        onChangeText={setCaregiverId}
      />
      <TextInput
        style={styles.input}
        placeholder="Time Slot"
        value={timeSlot}
        onChangeText={setTimeSlot}
      />
      <Button title="Submit Booking" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default BookingScreen;
