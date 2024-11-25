import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ComplianceScreen = () => {
  const [complianceRecords, setComplianceRecords] = useState([]);

  useEffect(() => {
    // Fetch compliance records from the backend
    axios
      .get('http://localhost:3000/api/compliance') // Update with actual endpoint
      .then((response) => setComplianceRecords(response.data))
      .catch((error) => console.error('Error fetching compliance records:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compliance Records</Text>
      <FlatList
        data={complianceRecords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.complianceItem}>
            <Text style={styles.complianceName}>{item.type}</Text>
            <Text style={styles.complianceDate}>Date: {item.date}</Text>
            <Text style={styles.complianceStatus}>Status: {item.status}</Text>
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
  complianceItem: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  complianceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  complianceDate: {
    fontSize: 14,
    color: '#666',
  },
  complianceStatus: {
    fontSize: 14,
    color: item => (item.status === 'Compliant' ? 'green' : 'red'),
  },
});

export default ComplianceScreen;
