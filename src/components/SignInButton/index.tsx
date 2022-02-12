import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'


import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true
  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" size={20} />
      Jonatas MS
      <FiX color="#737380" size={20} className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" size={20} />
      Sign in with Github
    </button>
  )
}
