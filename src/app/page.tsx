import styles from './page.module.css'

import Title from './_components/Title'
import Content from './_components/Content'

export default function Home() {
  return (
    <>
      <header>
        <Title/>
      </header>
      <main className={styles.main}>
        <Content />
      </main>
    </>
  )
}
