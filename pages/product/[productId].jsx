import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

function ProductDetails({ product }) {

    const router = useRouter()

    const productId = router.query.productId
    return (
        <div>
            <Head>
                <title>H2o | {product.title}</title>
                <meta name="description" content={product.title} />
                <meta property="og:description" content={product.title} />
                <meta property="og:image" content={`https://api.h2o.ng${product.images['500']}`} />
                <link rel="apple-touch-icon" sizes="72x72" href={`https://api.h2o.ng${product.images['500']}`} />
                <link rel="apple-touch-icon" sizes="120x120" href={`https://api.h2o.ng${product.images['500']}`} />
                <link rel="apple-touch-icon" sizes="144x144" href={`https://api.h2o.ng${product.images['500']}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Image
                    src={`https://api.h2o.ng${product.images['500']}`}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />

                {product.title}

            </div>

        </div>
    )
};


export default ProductDetails


export async function getServerSideProps(context) {
    const { productId } = context.query;
    console.log(productId)
    const response = await fetch(`https://api.h2o.ng/api/client/product/${productId}`)
    const { data } = await response.json()

    return {
        props: {
            product: data.product
        }
    }
}
