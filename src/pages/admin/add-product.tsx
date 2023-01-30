import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import { addNewProduct } from '../../store/admin/adminSlice';

const AddProductPage = () => {
  const [inputData, setInputData] = useState({
    title: '',
    description: '',
    price: 0,
    imageUrl: '',
  });
  const dispatch = useAppDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputData);
    const text = e.target.value;

    setInputData((oldState) => {
      return { ...oldState, [e.target.name]: text };
    });
  };

  const onAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputData);
    dispatch(addNewProduct(inputData));
  };

  return (
    <div className="flex align-top justify-center">
      <form
        className="flex flex-col justify-start"
        onSubmit={onAddProductSubmit}
      >
        <div className="mt-5 flex flex-col justify-center items-center">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="border-2 border-solid rounded-md p-1"
            onChange={onInputChange}
          />
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            type="text"
            className="border-2 border-solid rounded-md  p-1"
            onChange={onInputChange}
          />
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <label htmlFor="price">Price</label>
          <input
            name="price"
            type="number"
            step={0.1}
            className="border-2 border-solid rounded-md p-1"
            onChange={onInputChange}
          />
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <label htmlFor="imageUrl">Image</label>
          <input
            type="text"
            name="imageUrl"
            className="border-2 border-solid rounded-md p-1"
            onChange={onInputChange}
          />
        </div>

        <button>Add product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
