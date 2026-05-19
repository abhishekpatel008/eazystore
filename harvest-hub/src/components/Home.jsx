import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import { harvestData } from '../data/harvestData';

export default function Home() {

    return (<div className="home-container">
        <PageHeading />
        <ProductListings productList={harvestData}/>
    </div>);
}