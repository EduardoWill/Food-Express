import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.container}>

      {/* Botão separado (lado esquerdo) */}
      <TouchableOpacity style={styles.sosButton}>
        <Ionicons name="help-circle" size={32} color="#fff" />
      </TouchableOpacity>

      {/* Grupo da direita */}
      <View style={styles.rightGroup}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="home" size={30} color="#fff" />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="people" size={30} color="#fff" />
          <Text style={styles.label}>Contatos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="time" size={30} color="#fff" />
          <Text style={styles.label}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person" size={30} color="#fff" />
          <Text style={styles.label}>Perfil</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
    backgroundColor: '#6A0DAD',
    height: 85,

    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 15,
    paddingBottom: 10,
  },

  rightGroup: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },

  iconContainer: {
    alignItems: 'center',
  },

  label: {
    color: '#fff',
    fontSize: 10,
    marginTop: 3,
  },

  sosButton: {
    backgroundColor: '#3a035f',
    width: 65,
    height: 65,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});