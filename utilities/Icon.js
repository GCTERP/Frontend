const Icon = ({ name, outline }) => {
    return <span className={`${outline ? "material-icons-outlined" : "material-icons"}`}>{name}</span>;
}
 
export default Icon;