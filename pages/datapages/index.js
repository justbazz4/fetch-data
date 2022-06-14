import Link from 'next/link';
import styles from '../../styles/people.module.css'    



export const getStaticProps = async () => {
  
  
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();

    return {
        props: { persons: data }
    }
}  

const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(person => (
                <Link href={'/datapages/id'} key={person.id} >
                    <a  className={styles.singler}>
                        <h3 >{person.username}</h3>
                        <p><b>Name : </b>{person.name}</p>
                        <p><b>Email:</b>{person.email}</p>
                        <p><b>Address: </b>{person.address.city}</p>
                        <br />
                        <hr />
                    </a>
                    </Link>
            ))}
        </div>
    )
}

export default Persons
