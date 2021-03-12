import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {prismaClient} from '@prisma/client'
//import data from '../data/data'

export default function Home() {


  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cross2do
        </h1>

        <p className={styles.description}>
          Inscriptions{' '}
        </p>

        <div className={styles.grid}>

        <form action="http://www.acme.com/register" method="POST">
          <label for="name">Email  </label>
          <input id="name" type="text" autocomplete="Email" />
          <br/>
          <br/>

          <label for="name">Nom  </label>
          <input id="name" type="text" autocomplete="name" />
          <br/>
          <br/>

          <label for="name">Prénom  </label>
          <input id="name" type="text" autocomplete="Prénom" />
          <br/>
          <br/>

          <label for="name">Password </label>
          <input id="name" type="text" autocomplete="Password" />
          <br/>
          <br/>
         

          <label for="name">Anniversaire  </label>
          <input id="name" type="text" autocomplete="Anniversaire" />
          <br/>
          <br/>

          <label for="name">Sexe  </label>
          <input id="name" type="text" autocomplete="Sexe" />
          <br/>
          <br/>


          <button type="submit">envoyer</button>
        </form>
                    
        </div>
      </main>

    
    </div>
  )
}
