"use client";
import Image from 'next/image';
import styles from './Proyectos.module.css';
import { motion } from 'framer-motion';

export default function Proyectos() {
  return (
    <motion.section 
      id="proyectos" 
      className={styles.seccion}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      <h2>¡Proyectos!</h2>

      <div className={styles.proyectoLista}>

        <div className={styles.proyectoItem}>
          <div className={styles.textoColumna}>
            <h3>RUMI</h3>
            <p>
              El desarrollo de RUMI representó el desafío de crear una experiencia 
              de usuario simplificada para la selección de propiedades. Nuestro equipo 
              se enfocó en el diseño de una interfaz limpia y oscura, priorizando 
              la claridad de la información (precios, ubicaciones y valoraciones). 
              Este proyecto demuestra nuestra capacidad para transformar datos 
              complejos en una presentación visualmente atractiva y fácil de navegar, 
              logrando un sistema de búsqueda altamente funcional.
            </p>
          </div>
          <div className={styles.imagenColumna}>
            <Image
              src="/images/proyecto-rumi.jpg"
              alt="Preview del proyecto RUMI en una laptop"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className={styles.proyectoItem}>
          <div className={styles.textoColumna}>
            <h3>JAMBO</h3>
            <p>
              JAMBO es la materialización de nuestro trabajo en equipo. Desarrollado 
              en grupo, este proyecto conecta eficientemente habilidades con 
              necesidades. Estamos muy satisfechos con el resultado, demostrando 
              cómo la colaboración efectiva puede generar soluciones de alto impacto.
            </p>
          </div>
          <div className={styles.imagenColumna}>
            <Image
              src="/images/proyecto-jambo.jpg"
              alt="Preview del proyecto JAMBO en una laptop"
              width={600}
              height={400}
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}