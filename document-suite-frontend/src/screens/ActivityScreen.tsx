import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ActivityScreen = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from the backend
    axios
      .get('http://localhost:3000/api/activities') // Update with actual endpoint
      .then((response) => setActivities(response.data))
      .catch((error) => console.error('Error fetching activities:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activities</Text>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Text style={styles.activityName}>{item.name}</Text>
            <Text style={styles.activityDescription}>{item.description}</Text>
            <Text style={styles.activitySchedule}>Scheduled: {item.schedule}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
  },
  activitySchedule: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default ActivityScreen;
