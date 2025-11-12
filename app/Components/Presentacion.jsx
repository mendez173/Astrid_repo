"use client";
import Image from 'next/image';
import styles from './Presentacion.module.css';
import { motion } from 'framer-motion';

export default function Presentacion() {
  return (
    <motion.section 
      id="presentacion" 
      className={styles.seccion}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      
      <div className={styles.texto}>
        <h1>Astrid Reyes</h1>
        <p>Técnico en Contabilidad</p>
        <p>reyesmendezeunice@gmail.com</p>
        <a 
          href="https://linkedin.com/in/astrid-reyes-" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          linkedin.com/in/astrid-reyes-
        </a>
      </div>

      <div className={styles.imagen}>
        <Image
          src="/images/astrid-foto.jpg"
          alt="Foto de Astrid Reyes"
          width={450}
          height={600}
          priority
        />
      </div>

    </motion.section>
  );
}