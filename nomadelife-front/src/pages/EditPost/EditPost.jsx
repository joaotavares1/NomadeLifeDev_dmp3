import styles from "./EditPost.module.css"

import { useState, UseEffect, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useUpdateDocument } from "../../hooks/useUpdateDocument"


const EditPost = () => {
    const { id } = useParams()
    const { document: post } = useFetchDocument("posts", id)

    console.log(post)

    const [title, setTitle] = useState("")
    const [image, setimage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const [formError, seFormError] = useState("")

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setImage(post.image)
            setBody(post.body)

            const textTags = post.tags.join(", ")

            setTags(textTags)
        }
    }, [post])

    const { user } = useAuthValue()

    const navigate = useNavigate()

    const { updateDocument, response } = useUpdateDocument("posts")

    const handlerSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        try {
            new URL(image)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL")
        }

        const tagsArray = tags.split(",").map((tag) => tag.trim())

        console.log(tagsArray)

        console.log({
            title,
            image,
            body,
            tags: tagsArray,
        })

        const data = {
            title,
            image,
            body,
            tags: tagsArray,
        }

        console.log(post)

        updateDocument(id, data)
        navigate("/dashboard")
    }

    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados como desejar</p>
                    <form onSubmit={handlerSubmit}>
                        <label>
                            <span>Título:</span>
                            <input type="text"
                                name="text"
                                required
                                placeholder="Pense num bom título..."
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <p className={styles.preview_title}>Preview da imagem atual:</p>
                        <img className={styles.image_preview} src={post.image} alt={post.title} />
                        <label>
                            <span>Conteúdo:</span>
                            <textarea
                                name="body"
                                required
                                placeholder="Insira o conteúdo do post"
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                            ></textarea>
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input type="text"
                                name="tags"
                                required
                                placeholder="Insira as tags separadas por vírgula"
                                onChange={(e) => setTags(e.target.value)}
                                value={tags}
                            />
                        </label>
                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde.. .
                            </button>
                        )}
                        {(response.error || formError) && (
                            <p className="error">{response.error || formError}</p>
                        )}
                    </form>
                </>
            )}
        </div>
    )
}
export default EditPost