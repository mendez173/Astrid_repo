"use client";
import styles from './Metas.module.css';
import { motion } from 'framer-motion';

export default function Metas() {
  return (
    <motion.section 
      id="metas" 
      className={styles.seccion}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      <h2>Metas</h2>

      <div className={styles.columnasContenedor}>

        <div className={styles.columna}>
          <h3>Corto plazo</h3>
          <ul>
            <li>° Obtener experiencias prácticas.</li>
            <li>° Obtener certificaciones técnicas relevantes.</li>
            <li>° Habilidades técnicas.</li>
          </ul>
        </div>

        <div className={styles.columna}>
          <h3>Largo Plazo</h3>
          <ul>
            <li>° Especializarnos en un área tecnológica clave.</li>
            <li>° Posicionamiento profesional.</li>
            <li>° Estabilidad económica.</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}