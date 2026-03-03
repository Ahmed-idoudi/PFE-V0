import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Banlieue Sud Tracker</Text>
                <Text style={styles.subtitle}>SNCFT Réseau Express</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>
                    Suivez la position des trains de la Banlieue Sud de Tunis en temps réel.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Map')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Voir les trains</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Développé par</Text>
                <Text style={styles.authorNames}>Ahmed Idoudi & Daoud Ben Mamer</Text>
                <Text style={styles.supervisorTextHighlight}>Encadreur : Hassen Soyed (Directeur de mouvement)</Text>
                <Text style={styles.pfeText}>Projet PFE - 2026</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        height: '45%',
        backgroundColor: '#1E3A8A', // SNCFT Navy Blue
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    logoContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    logo: {
        fontSize: 60,
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E3A8A',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#4B5563',
        marginBottom: 40,
        lineHeight: 26,
    },
    button: {
        backgroundColor: '#1E3A8A',
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#1E3A8A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
        width: '100%',
    },
    footerText: {
        fontSize: 12,
        color: '#9CA3AF',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    authorNames: {
        fontSize: 14,
        fontWeight: '700',
        color: '#374151',
        marginTop: 2,
    },
    pfeText: {
        fontSize: 11,
        color: '#D1D5DB',
        marginTop: 4,
    },
    supervisorTextHighlight: {
        fontSize: 13,
        fontWeight: '600',
        color: '#1E3A8A',
        marginTop: 4,
    }
});

export default HomeScreen;
