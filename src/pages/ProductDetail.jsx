import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Button, Card, Image} from "semantic-ui-react";
import ProductService from "../services/productService";

function ProductDetail() {
    let {name} = useParams();
    /**useparams gelen parametreleri obje olarak allır. id:id yerine id yazdık(Destruction) -> aynı şey */

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data))
        console.log(product)
        console.log(product)
    }, []);

    return (
        <div>
            <Card.Group>
                <Card fluid>

                    <Card.Content>
                        <Image floated="right" size="mini" src="/images/avatar/large/steve.jpg"/>
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.category.categoryName}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Approve

                            </Button>
                            <Button basic color="red">
                                Decline
                            </Button>
                        </div>
                    </Card.Content>

                </Card>
            </Card.Group>
        </div>
    );
}

export default ProductDetail;
