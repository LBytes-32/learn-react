import { products } from "../data/products";

function ProductsPage() {
    return (
        <>
            <h2> Here are some great tools for React! </h2>
            
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            {product.name}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ProductsPage;