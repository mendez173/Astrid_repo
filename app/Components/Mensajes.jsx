"use client";
import Image from 'next/image';
import styles from './Mensajes.module.css';
import { motion } from 'framer-motion';

export default function Mensajes() {
  return (
    <motion.section 
      id="mensajes" 
      className={styles.seccion}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <h2>Mensajes</h2>

      <div className={styles.tarjetasContenedor}>

        <motion.figure 
          className={styles.tarjeta}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/nayeli.jpg"
            alt="Foto de Nayeli Fabián"
            width={100}
            height={100}
            className={styles.fotoPerfil}
          />
          <h3>Nayeli Fabián</h3>
          <blockquote>
            <p>
              Astrid es una persona sumamente responsable y comprometida. 
              Cuando se propone una meta, demuestra una gran disciplina y 
              perseverancia hasta alcanzarla, lo que la convierte en alguien 
              confiable y dedicada en cada proyecto que realiza.
            </p>
          </blockquote>
        </motion.figure>

        <motion.figure 
          className={styles.tarjeta}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/arturo.jpg"
            alt="Foto de Arturo Pueste"
            width={100}
            height={100}
            className={styles.fotoPerfil}
          />
          <h3>Arturo Pueste</h3>
          <blockquote>
            <p>
              Astrid es una persona con una personalidad firme posee una gran 
              determinación y suele tener mucha seguridad al hablar o hacer 
              cosas que le gustan como pintar, ella es una persona muy 
              perseverante que aunque no logre las cosas a la primera lo 
              intenta hasta lograrlo y es una amiga que sabe escuchar y 
              apoyar a los demás.
            </p>
          </blockquote>
        </motion.figure>

        <motion.figure 
          className={styles.tarjeta}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/rodrigo.jpg"
            alt="Foto de Rodrigo Rivera"
            width={100}
            height={100}
            className={styles.fotoPerfil}
          />
          <h3>Rodrigo Rivera</h3>
          <blockquote>
            <p>
              Eres una mujer inteligente, fuerte, amable, te esfuerzas 
              bastante y estoy seguro que siempre das el 200% de ti, 
              eres muy responsable e inspiras mucha confianza.
            </p>
          </blockquote>
        </motion.figure>

      </div>
    </motion.section>
  );
}