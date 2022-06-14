


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json()

    const paths = data.map(person => {
        return {
            params: {id: person.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
     const id = context.params.id

     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

     const data = await res.json()

     return {
         props: {persons: data}
     }
}


const Features = ({persons}) => {
    return (
        <div>
            <h1>Features</h1>

             <h3 >{persons.username}</h3>
            <p><b>Name : </b>{persons.name}</p>
            <p><b>Email:</b>{persons.email}</p>
            
            <p><b>Phone : </b>{persons.phone}</p>
            <p><b>Company:</b>{persons.company}</p>
            <p><b>Website: </b>{persons.website}</p>
  
                   
        </div>
    );
}

export default Features;
