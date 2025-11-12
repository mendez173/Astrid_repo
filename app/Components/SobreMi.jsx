"use client";
import Image from 'next/image';
import styles from './SobreMi.module.css';
import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <motion.section 
      id="sobre-mi" 
      className={styles.seccion}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      <div className={styles.imagenColumna}>
        <Image
          src="/images/astrid-sobremi.jpg"
          alt="Foto de Astrid Reyes"
          width={400} 
          height={400}
          className={styles.fotoPerfil}
        />
      </div>

      <div className={styles.textoColumna}>
        <h2>Sobre Mí</h2>
        <p>
          Soy Astrid Eunice Reyes Méndez y estoy en proceso de formación como técnico 
          Contador en C. E. Soldado Oscar Antonio Ortiz Reyes, cuento con una beca 
          para formación en inglés e informática regida por los valores ¡Supérate! 
          en centro ¡Supérate! Hilasal, además un curso sobre inglés dirigido al área 
          de empresas y atención al cliente en Construye Tu Futuro.
        </p>
        <p>
          Me considero una persona disciplinada siempre con un enfoque en mente, 
          aprovecho cada oportunidad para aprender , y seguiré buscando la manera 
          de aprender hacerlo para crecer en conocimientos y práctica.
        </p>
      </div>

    </motion.section>
  );
}