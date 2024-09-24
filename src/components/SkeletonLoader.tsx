import './SkeletonLoader.css'; // Make sure to create and import the CSS file

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-title"></div>
      <ul className="skeleton-list">
        <li className="skeleton-item"></li>
        <li className="skeleton-item"></li>
        <li className="skeleton-item"></li>
        <li className="skeleton-item"></li>
      </ul>
    </div>
  );
};

export default SkeletonLoader;