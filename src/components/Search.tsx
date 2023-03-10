type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { BsSearch } from 'react-icons/bs'

function Search({ loadUser }: SearchProps) {
    return (
        <div>
            <h2>Busque por um usuário: </h2>
            <p>Conheça seus melhores repositórios</p>
            <div>
                <input type="text" placeholder="Digite o nome do usuário" />
                <button><BsSearch /></button>
            </div>
        </div>
    )
}

export default Search