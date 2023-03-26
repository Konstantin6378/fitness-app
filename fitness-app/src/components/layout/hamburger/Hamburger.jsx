import styles from './Hamburger.module.scss'
import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";
import Menu from './Menu';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';


const Hamburger = () => {

  const { isShow, ref, setIsShow } = useOnClickOutside(false)


  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <RiCloseLine /> : <RiMenu5Fill />}
      </button>
      <Menu isShow={isShow} />
    </div>
  )
}

export default Hamburger