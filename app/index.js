import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Silakan masuk ke akun Anda</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" />
      </View>
      
      <TouchableOpacity style={styles.btnLogin} onPress={() => router.replace('/home')}>
        <Text style={styles.btnText}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.linkText}>Belum punya akun? <Text style={{fontWeight: 'bold', color: '#f359ab'}}>Daftar Disini</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffc7ec', justifyContent: 'center', padding: 30 },
  circle: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: 100, backgroundColor: '#f0f4ff' },
  title: { fontSize: 32, fontWeight: '800', color: '#d80258' },
  subtitle: { fontSize: 16, color: '#d80258', marginBottom: 40 },
  input: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 12, marginBottom: 15, fontSize: 16, borderWidth: 1, borderColor: '#eee' },
  btnLogin: { backgroundColor: '#b82e63', padding: 18, borderRadius: 12, marginTop: 10, shadowColor: '#3498db', shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 },
  linkText: { marginTop: 25, color: '#d80258', textAlign: 'center' }
});