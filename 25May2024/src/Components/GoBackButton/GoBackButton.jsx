import { useNavigate } from "react-router-dom"
import './GoBackButton.css'
const GoBackButton = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <button className="goBack" onClick={goBack}>Go Back</button>
    )
}

export default GoBackButton