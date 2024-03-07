const Favorites = () => {
    // const dispatch = useDispatch();

    // const isOpenModal = useSelector(selectIsOpenModal);
    // const products = useSelector(selectProducts);
    // // const filterTerm = useSelector(selectProductsFilterTerm);
    // const filteredProducts = useSelector(selectFilteredProducts);

    // const handleDeleteProduct = productId => {
    //   dispatch(deleteProduct(productId));
    // };

    // const handleAddProduct = productData => {
    //   const hasDuplicates = products.some(
    //     product => product.title === productData.title
    //   );

    //   if (hasDuplicates) {
    //     alert(`Oops, produc with title '${productData.title}' already exists!`);
    //     return;
    //   }

    //   const finalProduct = {
    //     ...productData,
    //     id: nanoid(),
    //   };

    //   dispatch(addProduct(finalProduct));
    // };

    // // const filteredProducts = products.filter(
    // //   ({ price, title }) =>
    // //     title.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
    // //     price.toString().includes(filterTerm.toLowerCase().trim())
    // // );

    // const sortedProducts = [...filteredProducts].sort(
    //   (a, b) => b.discount - a.discount
    // );

    return (
        <div>
            {/* <Section title="Add product Form">
        <ProductForm handleAddProduct={handleAddProduct} />
      </Section>
      <Section title="Filter Product">
        <Filter />
      </Section>
      <Section title="Product List">
        <div className={css.productList}>
          {sortedProducts.map(product => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                discount={product.discount}
                handleDeleteProduct={handleDeleteProduct}
              />
            );
          })}
        </div>
      </Section>

      {isOpenModal && <Modal />} */}
            <h2>Favorites</h2>
        </div>
    );
};

export default Favorites;
