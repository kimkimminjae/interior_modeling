import { useState } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./contact.module.scss";

 function Contact() {

  const [contactData, setContactData] = useState({Type:'결과가 이곳에 표시됩니다!'});
  const [image, setImage] = useState('');

  const handleOnchange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    console.log(contactData);
    setContactData({
      Type: "",
    });
  };

  function handleImage(e: any) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  function handleApi() {
        const formData = new FormData();
        formData.append('image', image);
    
        // '핵심'1. 8000번 서버URL의 image 폴더에 접근!
        fetch('http://localhost:8000/image', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setContactData(data.image);
          // '핵심'2. data의 'image'.
          // 서버에서 돌려보내는 image key값과 동일한 상태.           
        })
        .catch(error => {
          console.log(error);
        });
      };

  return (
    <div className={styles.contact}>
      
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
        className={styles.wrapper}
      >
        <div className={styles.form}>
          <form onSubmit={handleOnsubmit}>
            <textarea
              name='Type'
              cols={30}
              rows={5}
              onChange={handleOnchange}
              readOnly
              value= {JSON.stringify(contactData, null, 2)}
            ></textarea>
            <input type="file" name='file' onChange={handleImage} />
            <button onClick={handleApi}> 견적서 업로드 </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;