import { createContext, useState } from 'react';

const ModalContext = createContext({
	modal: false,
	open: () => { },
	close: () => { },
});

const ModalState = ({ children }) => {
	const [modal, setModal] = useState(false);

	const open = () => setModal(true);
	const close = () => setModal(false);

	return (
		<ModalContext.Provider value={{ modal, open, close }}>
			{children}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalState }
