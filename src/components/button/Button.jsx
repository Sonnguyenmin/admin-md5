import './button.scss';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const DANGER = 'danger';
const SUCCESS = 'success';

export default function Button({ children, htmlType, type = PRIMARY, onClick, search = false }) {
  const typeObject = {
    primary: PRIMARY,
    danger: DANGER,
    success: SUCCESS,
    secondary: SECONDARY,
  };
  return (
    <>
      <button onClick={onClick} type={htmlType} className={`base-button ${typeObject[type]}`}>
        {children}
      </button>
    </>
  );
}
