import ProductList from '../../components/products/ProductList';

const AdminProductsPage = () => {
  return (
    <div className="h-screen">
      <main className="h-full flex justify-center items-start">
        <ProductList />
      </main>
    </div>
  );
};

export default AdminProductsPage;
