import React, { useContext } from 'react';
import { PokeContext } from '../context/ContextProvider';

const Perfil = () => {
	const { userSession } = useContext(PokeContext);
	console.log(userSession);

	return <div>Perfil</div>;
};

export default Perfil;
