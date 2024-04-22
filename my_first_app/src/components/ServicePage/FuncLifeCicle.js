import { useEffect } from "react"

const FuncLifeCicle = () => {

    //lors du premier rendy (componentDidMount)
    useEffect(() => {
        effect()
    }, [])

    //lors du premier rendu (componentDidMount) à chaque nouveaux rendu (componentDidUpdate)
    useEffect(() => {
        effect()
    })

    //lors du premier rendy (componentDidMount) à chaque changement de l'item (componentDidUpdate)
    useEffect(() => {
        effect()
    }, [items])

    //lors du dernier rendu (componentUnmount)
    useEffect(() => {
        return () => {
            effect()
        }
    }, [])

    return (
        <div>

        </div>
    );
};
export default FuncLifeCicle;