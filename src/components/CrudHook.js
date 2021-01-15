import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const CrudHook = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')


    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'aaaaa' },
        { id: uuidv4(), name: 'Craig', username: 'bbbbb' },
        { id: uuidv4(), name: 'Ben', username: 'ccccc' },
    ];

    const [usuario, setUsuario] = useState(usersData);

    console.log(usuario);

    const handlSubmit = (e) => {
        e.preventDefault();
        setUsuario([...usuario, { name, username }]);
        console.log(name, username);
    }


    const deleteUser = (id) => {
        setUsuario(usuario.filter(use => use.id !== id));
        console.log('user deleted..');
    }



    return (
        <div>

            <div>
                <form onSubmit={handlSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    /> <br /> <br />
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}

                    /> <br /> <br />
                    <button className="btn btn-dark">enviar</button>
                </form>
            </div>
            <hr />
            <div>
                {
                    usuario.map((use, i) => {
                        return (
                            <h1 key={use.id}>
                                <h2>{i}-{use.name} - {use.username}
                                    <button onClick={() => deleteUser(use.id)}>X</button></h2>
                            </h1>
                        )
                    })

                }
            </div>
        </div>
    )
}


export default CrudHook;
