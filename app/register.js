import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, 
  KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Alert 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const prosesDaftar = () => {
    // SECURITY LOGIC (RegEx & Validasi)
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegEx = /^[0-9]{10,}$/;

    if (!nama) return Alert.alert("Ops!", "Nama jangan dikosongkan ya.");
    if (!emailRegEx.test(email)) return Alert.alert("Security Check", "Format email kamu sepertinya salah.");
    if (!phoneRegEx.test(phone)) return Alert.alert("Security Check", "Nomor HP harus angka & minimal 10 digit.");
    if (pass !== confirmPass) return Alert.alert("Security Check", "Password dan Konfirmasi harus sama!");

    if (nama && email && phone && pass) {
      router.push({ pathname: '/home', params: { user: nama } });
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: '#ffbae4' }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Buat Akun</Text>
        <Text style={styles.headerSub}>Lengkapi data untuk misi "The Secure Guard"</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput style={styles.input} placeholder="Contoh: Budi Santoso" onChangeText={setNama} />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="nama@email.com" keyboardType="email-address" autoCapitalize="none" onChangeText={setEmail} />

          <Text style={styles.label}>Nomor HP</Text>
          <TextInput style={styles.input} placeholder="08xxxxxxxxxx" keyboardType="numeric" onChangeText={setPhone} />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="******" secureTextEntry onChangeText={setPass} />

          <Text style={styles.label}>Konfirmasi Password</Text>
          <TextInput style={styles.input} placeholder="******" secureTextEntry onChangeText={setConfirmPass} />

          <TouchableOpacity style={styles.btnSubmit} onPress={prosesDaftar}>
            <Text style={styles.btnText}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { padding: 25, paddingTop: 60 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#2c3e50' },
  headerSub: { fontSize: 14, color: '#95a5a6', marginBottom: 30 },
  form: { marginTop: 10 },
  label: { fontSize: 14, fontWeight: '600', color: '#34495e', marginBottom: 8, marginTop: 15 },
  input: { backgroundColor: '#fdfdfd', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 10, padding: 12, fontSize: 16 },
  btnSubmit: { backgroundColor: '#2ecc71', padding: 16, borderRadius: 10, marginTop: 40, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});