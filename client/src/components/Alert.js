import { useGlobalContext } from "../assets/context/appContext";

const Alert = () => {
    const { alert } = useGlobalContext();

    return (
        <div className={`alert alert-${alert.type}`}>
            {alert.msg}
        </div>
    );
}

export default Alert;
