import React, {Component} from 'react';
import { Card, Button, Col } from 'react-bootstrap';

class CardsProducts extends Component {
    state = {
        cards: [
            {
                imagem: 'https://conteudos.xpi.com.br/wp-content/uploads/2020/12/image-55.png',
                title: 'Card 1',
                text: 'Text do card 1 para que nós possamos ver a diferença entre um e outro.',
            },
            {
                imagem: 'https://www.gdti.com.br/assets/img/hero-img.png',
                title: 'Card 2',
                text: 'Text do card 2 para que nós possamos ver a diferença entre um e outro.',
            },
            {
                imagem: 'https://img.migalhas.com.br/gf_base/empresas/MIGA/imagens/8D83254A32A74399A0DCE93E5349BAB51059_cerebrorobo.png',
                title: 'Card 3',
                text: 'Text do card 3 para que nós possamos ver a diferença entre um e outro.',
            },
        ]
    };

    render () {
        return (
        <>
            {this.state.cards.map(card =>
            <Col sm={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.imagem} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                        {card.text}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            )}
        </>
        );
    }
}

export default CardsProducts;