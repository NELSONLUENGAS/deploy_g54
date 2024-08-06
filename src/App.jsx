import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import Perfil from './views/Perfil';
import Dashboard from './views/Dashboard';
import Footer from './components/Footer';
import { Header } from './components/Header';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					// index
					element={<Home />}
				/>
				<Route
					path="/perfil"
					// index
					element={<Perfil />}
				/>
				<Route
					path="/dashboard"
					// index
					element={<Dashboard />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
