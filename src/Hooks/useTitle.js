import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `Doll Marketplace- ${title} `;
    }, [title])
}

export default useTitle;