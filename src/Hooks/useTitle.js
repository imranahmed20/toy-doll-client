import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Doll Marketplace `;
    }, [title])
}

export default useTitle;