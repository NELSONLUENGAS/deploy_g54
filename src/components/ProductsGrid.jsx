import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ProductsGrid() {
	return (
		<Container>
			<Row>
				<Col>1 of 3</Col>
				<Col>2 of 3</Col>
				<Col>3 of 3</Col>
			</Row>
		</Container>
	);
}