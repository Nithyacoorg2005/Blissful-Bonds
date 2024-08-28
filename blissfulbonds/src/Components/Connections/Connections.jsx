import React from 'react'
import { motion } from 'framer-motion'

const Connections = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <>
    Hello from connections
      
    </>
    </motion.div>
  )
}

export default Connections
