import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import { harvestData } from '../data/harvestData';

export default function Home() {

    return (<div className="max-w-\[1152px\] mx-auto px-6 py-8 justify-center">
        <PageHeading />
        <ProductListings productList={harvestData} />
    </div>);
}