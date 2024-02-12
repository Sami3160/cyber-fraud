import React from 'react'
import img2 from '../images/wall-8.jpeg'
import img3 from '../images/saved_image.gif'
import img4 from '../images/sql.gif'


import { motion } from 'framer-motion'
import './Card.css'
import img1 from "../images/homeimg1.webp"
function Card() {
  return (
    <div>

      <motion.div
        initial={{ opacity: 0, x: '-100vh' }}
        transition={{ delay: 1 }}
        animate={{ opacity: 1, x: '0' }}
        className="card">
        <motion.div
          className="card-left" id='1'>
          <img src={img2} alt="" style={{ width: 'inherit', height: '40vh' }} />
        </motion.div>
        <div className="card-right text-center " style={{ backgroundColor: '#9290C3', color: 'white' }}>The Metasploit framework is a very powerful tool which can be used by cybercriminals as well as ethical hackers to probe systematic vulnerabilities on networks and servers. Because it's an open-source framework, it can be easily customized and used with most operating systems.</div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: '-100vh' }}
        whileInView={{ opacity: 1, x: '0' }}
        className="card" >
        <div className="card-right" style={{ backgroundColor: '#535C91', color: 'white', borderTopRightRadius: '0px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '0px' }}>Applying strong data protection measures and safeguards not only protects individuals' or customers' personal data, but also your organisation's data. Therefore avoiding considerable problems, which may damage your reputation or your organisations' confidential information.</div>
        <div className="card-left text-center " style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '10px' }}>
          <img src={img3} alt="" style={{ width: 'inherit', height: '40vh' }} />


        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: '100vh' }}
        whileInView={{ opacity: 1, x: '0' }}
        className="card">
        <div className="card-left"   > 
        <img src={img4} alt="" style={{ width: 'inherit', height: '40vh' }} />
        
         </div>
        <div className="card-right text-center " style={{ backgroundColor: '#1B1A55', color: 'white' }}>Cybersecurity, also referred to as information technology security, focuses on protecting computer systems, networks, and data from theft, damage, or unauthorized access. In today’s interconnected world, cyber threats can come from various sources, including hackers, malicious software, and even disgruntled employees</div>
      </motion.div>


    </div>
  )
}

export default Card