import Button from '../../components/button/Button';
import './category.scss';

export default function Categories() {
  return (
    <>
      <div className="grid">
        <div className="row sm-gutter">
          <div className="cate-table">
            <h3 className="cate-heading">Liệt kê danh mục</h3>
            <section className="cate-content">
              <Button>Thêm</Button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
