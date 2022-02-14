import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, Table, Row, Col,ListGroup,ListGroupItem } from 'react-bootstrap';

class ListPhones extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItem: 0, tableData: [] };
    }

    async componentDidMount() {
        const response = await fetch(
            'https://api-mobilespecs.azharimm.site/v2/top-by-fans'
        );
        const responseData = await response.json();
        this.setState({ tableData: responseData, selectedItem: responseData[0] });
    }

    recogerDetallesMovil = (item) => {
        this.setState({ selectedItem: item });
    };

    render() {
        return (
            <div className="main-site">
                <h1>Moviles</h1>
                <Container>
                    <Row>
                        <Col lg={8} md={6}>
                            <Table responsive striped hover>
                                <thead>
                                    <tr>
                                        <th>Marca</th>
                                        <th>Modelo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tableData.map((item) => {
                                        return (
                                            <tr onClick={() => this.recogerDetallesMovil(item)}>
                                                <td>{item.phones.phone_name}</td>
                                                <td>{item.phones.details.brand}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg={4} md={6}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img src={this.state.selectedItem.details.thumbnail}/>
                                <Card.Body>
                                    <Card.Title>{this.state.selectedItem.details.phone_name}</Card.Title>
                                    <Card.Text>
                                       Marca: {this.state.selectedItem.details.brand}
                                       Sistema operativo:{this.selectedItem.details.os}
                                       Dimensión:{this.selectedItem.details.dimension}
                                       Almacenamiento{this.selectedItem.details.storage}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Favoritos {this.state.selectedItem.phone_name}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href={this.state.selectedItem.detail}>Más información acerca del teléfono</Card.Link>
                                    <Button variant="outline-primary">Favoritos</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ListPhones;