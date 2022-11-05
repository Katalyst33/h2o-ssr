import Link from "next/link";
import ShoppingCartComponent from "../pages/components/ShoppingCartComponents";

function AppHeader() {

    return (

        <>
            <div className="flex items-center px-4">
                <ul className='flex  gap-x-4'>
                    <li>      <Link href="/">Home</Link></li>
                    <li>      <Link href="/about">About Us</Link></li>
                    <li>About</li>
                    <li>All Products</li>

                </ul>


                <ShoppingCartComponent />
            </div>

        </>
    )
}


export default AppHeader