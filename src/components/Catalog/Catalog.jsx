import CatalogItem from "./CatalogItem/CatalogItem";


export default function Catalog() {
    return (
        <>
            {/* <div className="view-section">
                <div className="container"> */}
                    <section id="catalog-page">
                        <h2>Our Products</h2>
                        <CatalogItem />
                        {/* {games.map(x => <CatalogItem key={x._id} {...x} />)}

                        {games.length === 0 && (
                            <h3 className="no-articles">No articles yet</h3>
                        )} */}
                    </section>
{/* 
                </div>
            </div> */}
        </>
    )
}