import {useRouter} from 'next/router';

const Product = () => {
    const router = useRouter();
    return (
        <div>
            <h1>this is : {router.query.productId}</h1>
        </div>
    );
};

export default Product;