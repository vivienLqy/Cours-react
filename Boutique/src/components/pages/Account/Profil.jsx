

const Profil = ({ user }) => {
    return (
        <>
            <h1>Page de profil</h1>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
        </>
    );
};
export default Profil;