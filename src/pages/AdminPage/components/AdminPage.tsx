import { Container } from "../../../components/ui/Container.tsx";
import { useAppDispatch, useAppSelector } from "../../../hook/redux.ts";
import {
  getProducts,
  getTotalPage,
} from "../../../features/products/getProducts.ts";
import {
  getAllProducts,
  Product,
} from "../../../features/products/productsSlice.ts";
import { useEffect, useState } from "react";
import { getUrlAdmin } from "../../../features/products/getFilter.ts";
import classNames from "classnames";
import classes from "./AdminPage.module.css";
import classesPagination from "../../../components/ui/style/Pagintaion.module.css";
import ReactPaginate from "react-paginate";
import { ProductCartAdmin } from "./ProductCartAdmin.tsx";
import { filterActions } from "../../../features/products/filterSlice.ts";
import { SkeletonProduct} from "../../../components/ui/SkeletonProduct.tsx";
import { FormProduct } from "../../../components/FormProduct/FormProduct.tsx";
import { Modal } from "../../../components/Modal/Modal.tsx";
import { productsInstance } from "../../../lib/istance.ts";
import {Category, FormCategory} from "../../../components/Category/Category.tsx";
import {getCategory} from "../../../features/products/categorySlice.ts";
import {toggleScrollBar} from "../../../lib/utils.ts";


export const AdminPage = () => {
  const totalPage = useAppSelector(getTotalPage());
  const products = useAppSelector(getProducts);

  const loading = useAppSelector((state) => state.allProducts.loading);
  const categories = useAppSelector((state) => state.categories.category);
  const url = useAppSelector(getUrlAdmin);
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id:"",
    category:{
      id: '',
      value: '',
      label: '',
    },
    price:"",
    desc:"",
    image:"",
    name:""
  });
  const dispatch = useAppDispatch();


  const handlePageChange = (value: { selected: number }) => {
    const currentPage = value.selected + 1;
    dispatch(filterActions.changePage(currentPage));
  };

  const putChangeFormProduct = async (value: Product) => {
    await productsInstance.put(`data/${value.id}`, value);
    getProduct();
  };
  const postChangeFormProduct = async (value: Omit<Product, "id">) => {
    console.log(value)
    await productsInstance.post(`data`, value);
    getProduct();
  };

  const postFormCategory = async (value:FormCategory) => {
    await productsInstance.post('category', value)
    getCategories();
  }
  const onDelete = async (url:string, id:string) => {
    await productsInstance.delete(`${url}/${id}`)
    if(url === "category"){
      getCategories();
    }else{
      getProduct()
    }
  }

  const onClickBtnProduct = (product: Product) => {
        setSelectedProduct(product);
        setShowModalProduct(true);
  };

  const onChangeFormProduct = (product:Product) => {
    if(product.id){
      putChangeFormProduct(product)
    }else {
      postChangeFormProduct(product);
    }
    setShowModalProduct(false)
    toggleScrollBar(false)
  };

  const onChangeFormCategory = (value: FormCategory) => {
    const findCategory = categories.find((category) => category.value.toLowerCase() === value.value.toLowerCase());
    if(findCategory){
    }else {
      postFormCategory(value)
    }
  }

  const onCloseModal = () => {
    if (showModalProduct) {
      setShowModalProduct(false);
      setSelectedProduct({
        id:"",
        category:{
          id: '',
          value: '',
          label: '',
        },
        price:"",
        desc:"",
        image:"",
        name:""
      });
    } else {
      setShowModalCategory(false);
    }
    toggleScrollBar(false)
  };
  const getProduct = async () => {
    await dispatch(getAllProducts(url));
  };
  const getCategories = async () => {
    await dispatch(getCategory())
  }
  useEffect(() => {
    getProduct();

  }, [url]);
  return (
    <Container>
      <div className={classNames(classes.admin)}>
        <div className={classes.header}>
          <p className={classes.text}>Картинка</p>
          <p className={classes.text}>Наименование</p>
          <p className={classes.text}>Цена</p>
          <p className={classes.text}>Описание</p>
          <p className={classes.text}>Категория</p>
        </div>
        <div>
          <button
            className={"button mr mb button-active"}
            onClick={() =>{
              onClickBtnProduct({
                id:"",
                category:{
                  id: '',
                  value: '',
                  label: '',
                },
                price:"",
                desc:"",
                image:"",
                name:""
              })
              toggleScrollBar(true)
            }
            }
          >
            Добавить новый продукт
          </button>
          <button
            className={"button mr mb button-active"}
            onClick={ () => {
              setShowModalCategory(true)
              toggleScrollBar(true)
            }}
          >
            Настройка категорий
          </button>
        </div>
        <div className={classes.content}>
        {loading
          ? products.map((product: Product) => (
              <ProductCartAdmin
                prod={product}
                id={product.id}
                image={product.image}
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                desc={product.desc}
                onClick={onClickBtnProduct}
                deleteProduct={onDelete}
              />
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <SkeletonProduct key={index} />
            ))}
        </div>
      </div>
      {!!totalPage && (
        <ReactPaginate
          previousLabel="<<Previous"
          nextLabel="Next>>"
          pageClassName={classesPagination.pageItem}
          pageLinkClassName={classesPagination.pageLink}
          previousClassName={classesPagination.pageItem}
          previousLinkClassName={classesPagination.pageLink}
          nextClassName={classesPagination.pageItem}
          nextLinkClassName={classesPagination.pageLink}
          breakLabel="..."
          breakClassName={classesPagination.pageItem}
          breakLinkClassName={classesPagination.pageLink}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={classesPagination.pagination}
          activeClassName={classesPagination.active}
        />
      )}
      {
        showModalProduct &&
          <Modal onClose={() => onCloseModal()} active={showModalProduct}>
            <FormProduct
                initialValues={selectedProduct}
                onSubmit={(values) => onChangeFormProduct(values)}
            />
          </Modal>
      }
      {
        showModalCategory && <Modal onClose={() => onCloseModal()} active={showModalCategory}>
            <Category onSubmit={onChangeFormCategory} deleteCategory={onDelete}/>
          </Modal>
      }
    </Container>
  );
};
