import { defineConfig } from 'vite';

export default defineConfig( {
    root: 'src', // Direktori root proyek Anda
    build: {
        outDir: '../dist', // Tempat output build
        emptyOutDir: true, // Menghapus folder output sebelum build
    },
    server: {
        port: 3000, // Port yang digunakan untuk server pengembangan
    },
} );
