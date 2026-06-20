import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Role = 'admin' | 'common';

export default function LoginScreen({ navigation }: NativeStackScreenProps<any>) {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleIngresar = () => {
    if (!selectedRole) return;
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesion</Text>
      <Text style={styles.subtitle}>Seleccione un rol</Text>

      <Pressable
        style={[styles.roleOption, selectedRole === 'admin' && styles.roleOptionSelected]}
        onPress={() => setSelectedRole('admin')}
      >
        <View style={[styles.radio, selectedRole === 'admin' && styles.radioSelected]} />
        <Text style={styles.roleText}>admin</Text>
      </Pressable>

      <Pressable
        style={[styles.roleOption, selectedRole === 'common' && styles.roleOptionSelected]}
        onPress={() => setSelectedRole('common')}
      >
        <View style={[styles.radio, selectedRole === 'common' && styles.radioSelected]} />
        <Text style={styles.roleText}>common</Text>
      </Pressable>

      <Pressable
        style={[styles.button, !selectedRole && styles.buttonDisabled]}
        disabled={!selectedRole}
        onPress={handleIngresar}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
  },
  roleOptionSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#888',
    marginRight: 12,
  },
  radioSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#2563eb',
  },
  roleText: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
