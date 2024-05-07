const Body = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {/** Different styles of mapping */}
        {/* {resList.map((item, index) => (
            <RestaurantCard resData={resList[index]} />
          ))} */}
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
