import styles from './Search.module.css'
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"
import PostDetail from '../../components/PostDetail'
import { Link } from "react-router-dom"

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)

    return (
        <div className={styles.search_container}>
            <h1>Resultados encontrados para: {search}</h1>
            <div className="post-list">
                {/* Verifica se posts ainda não foi carregado */}
                {posts === undefined && <p>Carregando resultados...</p>}
    
                {/* Mensagem de erro quando posts é uma lista vazia */}
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className="btn btn-dark">
                            Voltar
                        </Link>
                    </>
                )}
    
                {/* Renderiza os posts quando disponíveis */}
                {posts && posts.map((post) => 
                    <PostDetail key={post.id} post={post} />
                )}
            </div>
        </div>
    );
}
export default Search