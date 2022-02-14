import React from 'react';
import { Container,Dropdown } from 'react-bootstrap';

class ListBrands extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 0, tableData: [] }
    }

    async componentDidMount() {
        const response = await fetch(
            'https://api-mobilespecs.azharimm.site/v2/brands'
        );
        const responseData = await response.json();
        this.setState({ tableData: responseData, selectedItem: responseData[0] });
    }

    recogerDetallesMarca = (item) => {
        this.setState({ selectedItem: item });
    };

    render() {
        return (
            <Container>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Modelos
                    </Dropdown.Toggle>
                    {this.state.tableData.map((item) => {
                        return (
                            <Dropdown.Menu>
                                <Dropdown.Item href={item.brand_name}>{item.brand_name}</Dropdown.Item>
                            </Dropdown.Menu>
                        );
                    })}
                </Dropdown>

            </Container>
        )
    }

}
export default ListBrands;
