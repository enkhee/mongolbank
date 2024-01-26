import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  productDetail: any;
}

const ProductBox: React.FC<Props> = (props) => {
  const { productDetail } = props;
  const product = productDetail;

  return (
    <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
      <div className="card">
        <div className="d-flex justify-content-between p-3">
          <p className="lead mb-0">
            <Link href={`/products/${product?.id}`}>{product?.title}1</Link>
          </p>
          <div
            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
            style={{ width: "35px", height: "35px" }}
          >
            <p className="text-white mb-0 small">x3</p>
          </div>
        </div>
        <Image
          src={product?.image}
          alt={product?.title}
          width={300}
          height={350}
          className="card-img-top"
          blurDataURL={product?.image}
          placeholder="blur" // Optional blur-up while loading
          priority
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="small">
              <a href="#!" className="text-muted">
                {product?.category}
              </a>
            </p>
            <p className="small text-danger">
              <s>{product?.price}</s>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">Toshiba B77</h5>
            <h5 className="text-dark mb-0">$1299</h5>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              Available:{" "}
              <span className="fw-bold">{product?.rating?.rate}</span>
            </p>
            <div className="ms-auto text-warning">
              <i className="fa fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
