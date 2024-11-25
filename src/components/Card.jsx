import PropTypes from "prop-types";

export function Card({ children }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-16 bg-[rgba(255,255,255,0.26)] border border-[rgba(255,255,255,0.3)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[1.6px]">
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired, // children should be a React node and is required
};

export default Card;
